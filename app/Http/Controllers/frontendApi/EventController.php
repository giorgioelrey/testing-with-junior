<?php

namespace App\Http\Controllers\frontendApi;

use App\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function index()
     {
       $response = [
            'success' => true,
            'events' => array_reverse(Event::all()->each(function ($item, $key) {

             //Check if is a loremPixel url otherwise get url for img tag
              $urlSplit = explode("/",$item->image_url);
              if (!in_array('lorempixel.com', $urlSplit)){
               $item->image_url = Storage::url($item->image_url);
             }

             })->toArray()),
            'message' => 'All Events retrieved successfully.'
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

    public function daysForMonthInYear($year, $month){

        $daysArray = [1, 5,6,7,8,9,10];

        $response = [
            'success' => true,
            'days' => $daysArray,
            'message' => "Days for {$month}-{$year}",
        ];

        return response()->json($response, 200);

    }


}
