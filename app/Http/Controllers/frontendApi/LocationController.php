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
          'events' => Location::all()->each(function ($item, $key) {

           //Check if is a loremPixel url otherwise get url for img tag
            $urlSplit = explode("/",$item->image_url);
            if (!in_array('lorempixel.com', $urlSplit)){
             $item->image_url = Storage::url($item->image_url);
           }

           })->toArray(),
          'message' => 'All Locations retrieved successfully.'
      ];

      return response()->json($response, 200);
   }

}
