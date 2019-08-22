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
           'events' => array_reverse(Event::all()->reverse()->each(function ($item, $key) {
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
        $event->date = $request->date;
        $event->time = $request->time;
        $event->description_it = QuillEditorHelper::convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->description_it);
        $event->description_en = QuillEditorHelper::convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->description_en);
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

      Storage::delete($event->image_url);
       $event->metadescription_it = $request->metadescription_it;
       $event->metadescription_en = $request->metadescription_en;
       $event->title_it = $request->title_it;
       $event->title_en = $request->title_en;
       $event->address = $request->address;
       $event->date = $request->date;
       $event->time = $request->time;
       $event->description_it = QuillEditorHelper::updateImagesForFieldAndSaveChangedOnesStoringValidUrlAndReturnField($request->description_it, $event->description_it);
       $event->description_en = QuillEditorHelper::updateImagesForFieldAndSaveChangedOnesStoringValidUrlAndReturnField($request->description_en, $event->description_en);

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
      QuillEditorHelper::deleteAllImagesForField( $event->description_it);
      QuillEditorHelper::deleteAllImagesForField( $event->description_en);
      $event->delete();

       $response = [
           'success' => true,
           'event' => $data,
           'message' => 'Event deleted successfully.'
       ];

     return response()->json($response, 200);

    }
}
