<?php

namespace App\Http\Controllers\frontendApi;

use App\Location;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
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
          'locations' => array_reverse(Location::all()->each(function ($item, $key) {

           //Check if is a seed url otherwise get url for img tag
            $urlSplit = explode("/",$item->image_url);
            if (!in_array('montenapoleone', $urlSplit)){
             $item->image_url = Storage::url($item->image_url);
           }

           })->toArray()),
          'message' => 'All Locations retrieved successfully.'
      ];

      return response()->json($response, 200);
   }


    public function boutiquesByStreetId($streetId){

       $boutiques = Location::where('street_id', $streetId)
           ->where('category_id', 4)
           ->get();

       if($boutiques->isEmpty()){
           $response = [
               'success' => true,
               'boutiques' => [],
               'message' => 'No Boutiques for this street'
           ];
           return response()->json($response, 200);
       }


        $response = [
            'success' => true,
            'boutiques' => $boutiques->each(function ($item, $key) {

            //Check if is a loremPixel url otherwise get url for img tag
            $urlSplit = explode("/",$item['image_url']);
            if (!in_array('montenapoleone', $urlSplit)){
                $item['image_url'] = Storage::url($item['image_url']);
            }
        })->toArray(),
            'message' => 'Boutiques retrieved successfully.'
        ];

        return response()->json($response, 200);

    }


public function hotels(){

  $response = [
       'success' => true,
       'hotels' => Location::where('category_id', 3)->get()->each(function ($item, $key) {

        //Check if is a seed url otherwise get url for img tag
          $urlSplit = explode("/",$item->image_url);
          if (!in_array('montenapoleone', $urlSplit)){
          $item->image_url = Storage::url($item->image_url);
         }

        })->toArray(),
       'message' => 'All hotels retrieved successfully.'
   ];

   return response()->json($response, 200);
}














}
