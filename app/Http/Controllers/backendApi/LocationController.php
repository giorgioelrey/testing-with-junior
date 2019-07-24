<?php

namespace App\Http\Controllers\backendApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Location;
use App\Category;
use Illuminate\Support\Facades\Validator;

class LocationController extends Controller
{

  public function index()
  {

    $response = [
         'success' => true,
         'locations' => Location::all()->toArray(),
         'message' => 'Locations retrieved successfully.'
     ];

     return response()->json($response, 200);

  }


    public function store(Request $request)
    {
      $input = $request->all();

        $location = new Location;
        $location->fill($input);
        $location->save();
        $data = $location->toArray();

         $response = [
             'success' => true,
             'location' => $data,
             'message' => 'Location stored successfully.'
         ];

         return response()->json($response, 200);

      }


      public function show($id)
      {
        $location = Location::find($id);

        if (is_null($location)) {
            $response = [
                'success' => false,
                'data' => [],
                'message' => 'Location not found.'
            ];
            return response()->json($response, 404);
        }


        $response = [
            'success' => true,
            'location' => $location,
            'message' => 'Location retrieved successfully.'
        ];

        return response()->json($response, 200);
      }

      public function update(Request $request)
      {

        $input = $request->all();

        $location = Location::find($input['id']);
        $data = $location->toArray();

        if (is_null($location)) {
            $response = [
                'success' => false,
                'data' => [],
                'message' => 'Location not found.'
            ];
            return response()->json($response, 404);
        }

        //UPDATE OPS
        $location->update($input);
        $location->category_id = $request['category_id'];
        $location->save();

         $data = $location->toArray();

         $response = [
             'success' => true,
             'data' => $data,
             'message' => 'Location updated successfully.'
         ];

         return response()->json($response, 200);

      }

      public function destroy($id)
      {

        $location = Location::find($id);
        $data = $location->toArray();

        if (is_null($location)) {
            $response = [
                'success' => false,
                'data' => [],
                'message' => 'Location not found.'
            ];
            return response()->json($response, 404);
        }

        $location->delete();
        $data = $location->toArray();

         $response = [
             'success' => true,
             'data' => $data,
             'message' => 'Location deleted successfully.'
         ];

       return response()->json($response, 200);
      }



}
