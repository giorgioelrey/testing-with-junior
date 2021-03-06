<?php

namespace App\Http\Controllers\backendApi;

use App\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use QuillEditorHelper;

class EventController extends Controller
{

    public function index()
    {
      $response = [
           'success' => true,
           'events' => array_reverse(Event::all()->each(function ($item, $key) {
             //Check if is a loremPixel url otherwise get url for img tag
              $urlSplit = explode("/",$item['image_url']);
              if (!in_array('lorempixel.com', $urlSplit)){
               $item['image_url'] = Storage::url($item['image_url']);
             }
            })->toArray()),
           'message' => 'All Events retrieved successfully.'
       ];

       return response()->json($response, 200);
    }

    public function store(Request $request)
    {
      $input = $request->all();
       $validator = Validator::make($input, [
          'image_url' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2000',
       ]);

       if ($validator->fails()) {
           $response = [
               'success' => false,
               'data' => 'Validation Error.',
               'message' => $validator->errors()
           ];
           return response()->json($response, 404);
       }

        $event = new Event;

        $event->metadescription_it = $request->metadescription_it;
        $event->metadescription_en = $request->metadescription_en;
        $event->title_it = $request->title_it;
        $event->title_en = $request->title_en;
        $event->address = $request->address;
        $event->start_date = $request->start_date;
        $event->start_time = $request->start_time;
        $event->end_date = $request->end_date;
        $event->end_time = $request->end_time;
        $event->bodytop_it = QuillEditorHelper::convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->bodytop_it);
        $event->bodytop_en = QuillEditorHelper::convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->bodytop_en);
        $event->bodybottom_it = QuillEditorHelper::convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->bodybottom_it);
        $event->bodybottom_en = QuillEditorHelper::convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->bodybottom_en);
        $event->image_url = $request->file('image_url')->store('public');

        $event->save();
        $data = $event->toArray();

         $response = [
             'success' => true,
             'event' => $data,
             'message' => 'Event stored successfully.'
         ];

         return response()->json($response, 200);
    }

    public function showById($id)
    {
      $event = Event::find($id);

      //Check if is a loremPixel url otherwise get url for img tag
      $urlSplit = explode("/",$event['image_url']);

      if (!in_array('lorempixel.com', $urlSplit)){

        $event['image_url'] = Storage::url($event['image_url']);

      }


      $eventResponse = $event->toArray();

      if (is_null($event)) {
          $response = [
              'success' => false,
              'data' => [],
              'message' => 'Event not found.'
          ];
          return response()->json($response, 404);
      }


      $response = [
          'success' => true,
          'event' => $eventResponse,
          'message' => 'Event retrieved successfully.'
      ];

      return response()->json($response, 200);
    }

    public function showByDate($date)
    {

      $foundEvents = DB::table('events')->whereDate('date', $date)->get();
      $eventsArray = $foundEvents->toArray();

      if (is_null($eventsArray)) {
          $response = [
              'success' => false,
              'events' => [],
              'message' => 'No events found'
          ];
          return response()->json($response, 404);
      }


      $response = [
          'success' => true,
          'events' => $eventsArray,
          'message' => 'Events retrieved successfully.'
      ];

      return response()->json($response, 200);
    }


    public function showByMonth($month)
    {

      $foundEvents = DB::table('events')->whereMonth('date', $month)->get();
      $eventsArray = $foundEvents->toArray();

      if (is_null($eventsArray)) {
          $response = [
              'success' => false,
              'events' => [],
              'message' => 'No events found'
          ];
          return response()->json($response, 404);
      }


      $response = [
          'success' => true,
          'events' => $eventsArray,
          'message' => 'Events retrieved successfully.'
      ];

      return response()->json($response, 200);
    }

    public function update(Request $request)
    {

      $input = $request->all();

      $event = Event::find($input['id']);

      if (is_null($event->toArray())) {
          $response = [
              'success' => false,
              'data' => [],
              'message' => 'Post not found.'
          ];
          return response()->json($response, 404);
      }

       $input = $request->all();

        if ($request->hasFile('image_url')) {
            $validator = Validator::make($input, [
                'image_url' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2000',
            ]);

            if ($validator->fails()) {
                $response = [
                    'success' => false,
                    'data' => 'Validation Error.',
                    'message' => $validator->errors()
                ];
                return response()->json($response, 404);
            }
        }


       $event->metadescription_it = $request->metadescription_it;
       $event->metadescription_en = $request->metadescription_en;
       $event->title_it = $request->title_it;
       $event->title_en = $request->title_en;
       $event->address = $request->address;
       $event->start_date = $request->start_date;
       $event->start_time = $request->start_time;
       $event->end_date = $request->end_date;
       $event->end_time = $request->end_time;
       $event->bodytop_it = QuillEditorHelper::updateImagesForFieldAndSaveChangedOnesStoringValidUrlAndReturnField($request->bodytop_it, $event->bodytop_it);
       $event->bodytop_en = QuillEditorHelper::updateImagesForFieldAndSaveChangedOnesStoringValidUrlAndReturnField($request->bodytop_en, $event->bodytop_en);
       $event->bodybottom_it = QuillEditorHelper::updateImagesForFieldAndSaveChangedOnesStoringValidUrlAndReturnField($request->bodybottom_it, $event->bodybottom_it);
       $event->bodybottom_en = QuillEditorHelper::updateImagesForFieldAndSaveChangedOnesStoringValidUrlAndReturnField($request->bodybottom_en, $event->bodybottom_en);

        if ($request->hasFile('image_url')){
            Storage::delete($event->image_url);
            $event->image_url = $request->file('image_url')->store('public');
        }


      //UPDATE OPS

      $event->save();

       $responseData = $event->toArray();

       $response = [
           'success' => true,
           'event' => $responseData,
           'message' => 'Event updated successfully.'
       ];

       return response()->json($response, 200);
    }

    public function destroy($id)
    {
      $event = Event::find($id);
      $data = $event->toArray();

      if (is_null($event)) {
          $response = [
              'success' => false,
              'event' => [],
              'message' => 'Event not found.'
          ];
          return response()->json($response, 404);
      }

      $data = $event->toArray();

      Storage::delete($event->image_url);
      QuillEditorHelper::deleteAllImagesForField( $event->bodytop_it);
      QuillEditorHelper::deleteAllImagesForField( $event->bodytop_en);
      QuillEditorHelper::deleteAllImagesForField( $event->bodybottom_it);
      QuillEditorHelper::deleteAllImagesForField( $event->bodybottom_en);
      $event->delete();

       $response = [
           'success' => true,
           'event' => $data,
           'message' => 'Event deleted successfully.'
       ];

     return response()->json($response, 200);

    }
}
