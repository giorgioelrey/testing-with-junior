<?php

namespace App\Http\Controllers\backendApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Location;
use App\Category;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class LocationController extends Controller
{

  public function index()
  {

    $response = [
         'success' => true,
         'locations' => Location::all()->each(function ($item, $key) {

          //Check if is a loremPixel url otherwise get url for img tag
           $urlSplit = explode("/",$item['image_url']);
           if (!in_array('montenapoleone', $urlSplit)){
            $item['image_url'] = Storage::url($item['image_url']);
          }

          })->toArray(),
         'message' => 'Locations retrieved successfully.'
     ];

     return response()->json($response, 200);

  }


    public function store(Request $request)
    {
      $input = $request->all();

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


      $location = new Location;
      $location->name_it = $request->name_it;
      $location->name_en = $request->name_en;
      $location->address = $request->address;
      $location->latitude = $request->latitude;
      $location->longitude = $request->longitude;
      $location->phonenumber = $request->phonenumber;
      $location->email = $request->email;
      $location->description_it = $request->description_it;
      $location->description_en = $request->description_en;
      $location->image_url = $request->file('image_url')->store('public');
      $location->category_id = $request->category_id;

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

        //Check if is a loremPixel url otherwise get url for img tag
        $urlSplit = explode("/",$post['image_url']);

        if (!in_array('montenapoleone', $urlSplit)){

          $location['image_url'] = Storage::url($location['image_url']);

        }

        $locationResponse = $post->toArray();


        $response = [
            'success' => true,
            'location' => $locationResponse,
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

       Storage::delete($location->image_url);

        //UPDATE OPS
        $location->name_it = $request->name_it;
        $location->name_en = $request->name_en;
        $location->slug_it = $request->slug_it;
        $location->slug_en = $request->slug_en;
        $location->address = $request->address;
        $location->latitude = $request->latitude;
        $location->longitude = $request->longitude;
        $location->phonenumber = $request->phonenumber;
        $location->email = $request->email;
        $location->description_it = $request->description_it;
        $location->description_en = $request->description_en;
        $location->image_url = $request->file('image_url')->store('public');
        $location->category_id = $request->category_id;

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

        $data = $location->toArray();

        Storage::delete($location->image_url);

        $location->delete();

       $response = [
           'success' => true,
           'data' => $data,
           'message' => 'Location deleted successfully.'
       ];

       return response()->json($response, 200);
      }



}
