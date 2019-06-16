<?php

namespace App\Http\Controllers\backendApi;

use App\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventController extends Controller
{

    public function index()
    {
      $response = [
           'success' => true,
           'events' => Event::all()->toArray(),
           'message' => 'All Events retrieved successfully.'
       ];

       return response()->json($response, 200);
    }

    public function store(Request $request)
    {
      $input = $request->all();

        /*
        APPLY VALIDATOR
       $validator = Validator::make($input, [

       ]);

       if ($validator->fails()) {
           $response = [
               'success' => false,
               'data' => 'Validation Error.',
               'message' => $validator->errors()
           ];
           return response()->json($response, 404);
       }

       */

        $event = new Event;
        $event->fill($input);
        $event->save();
        $data = $event->toArray();

         $response = [
             'success' => true,
             'post' => $data,
             'message' => 'Event stored successfully.'
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
              'data' => [],
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
              'data' => [],
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
      $data = $event->toArray();

      if (is_null($event)) {
          $response = [
              'success' => false,
              'data' => [],
              'message' => 'Event not found.'
          ];
          return response()->json($response, 404);
      }

/*

      APPLY VALIDATION
       $validator = Validator::make($input, [
           'name' => 'required',
           'author' => 'required'
       ]);

       if ($validator->fails()) {
           $response = [
               'success' => false,
               'data' => 'Validation Error.',
               'message' => $validator->errors()
           ];
           return response()->json($response, 404);
       }

      */

      //UPDATE OPS
      $event->update($input);
      $event->save();

       $data = $event->toArray();

       $response = [
           'success' => true,
           'data' => $data,
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
              'data' => 'Empty',
              'message' => 'Post not found.'
          ];
          return response()->json($response, 404);
      }

      $event->delete();
      $data = $event->toArray();

       $response = [
           'success' => true,
           'data' => $data,
           'message' => 'Post deleted successfully.'
       ];

     return response()->json($response, 200);
     
    }
}
