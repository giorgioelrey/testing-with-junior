<?php

namespace App\Http\Controllers\frontendApi;

use App\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

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


        $eventsInThisMonth = Event::whereMonth('start_date',$month)->whereYear('start_date',$year)->get()->toArray();

        $daysWithEvents = [];

        foreach ($eventsInThisMonth as $event ){

            $startDate = Carbon::parse($event['start_date']);
            $endDate = Carbon::parse($event['end_date']);

            $daysBetween = $this->datesbetween($startDate,$endDate);

            $daysWithEvents = array_unique(array_merge($daysBetween,$daysWithEvents));

        }

        $formattedDays = array_map(function($day){
            return Carbon::parse($day)->day;
        },$daysWithEvents);

        $response = [
            'success' => true,
            'days' => $formattedDays,
            'message' => "Days for {$month}-{$year}",
        ];

        return response()->json($response, 200);

    }

    private function datesbetween ($date1,$date2)
    {
        $dates= array();
        for ($i = $date1
        ; $i<= $date2
        ; $i=date_add($i, date_interval_create_from_date_string('1 days')) )
        {
            $dates[] = clone $i;
        }
        return $dates;
    }


}
