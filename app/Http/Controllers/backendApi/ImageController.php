<?php

namespace App\Http\Controllers\backendApi;

use App\Image;
use App\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Validator,Response,File;

class ImageController extends Controller
{

    public function store(Request $request)
    {

     $validation = Validator::make($request->all(), [
      'select_file' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
     ]);

     if($validation->passes()) {

      $image = $request->file('select_file');
      $new_name = date('YmdHis') . '.' . $image->getClientOriginalExtension();
      $image->move(public_path('images'), $new_name);

      return response()->json([
       'message'   => 'Image Upload Successfully',
       'uploaded_image_src' => '\/images\/' . $new_name,
      ]);

     } else {

      return response()->json([
       'message'   => $validation->errors()->all(),
       'uploaded_image' => '',
      ]);

     }

    }

    public function updateImageAndReturnPath(Request $request)
    {

      $input = $request->all();

      $page = Page::findOrFail($request->pageid);

      $validator = Validator::make($input, [
          'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      ]);

      if ($validator->fails()) {
           $response = [
               'success' => false,
               'data' => 'Validation Error.',
               'message' => $validator->errors()
           ];
           return response()->json($response, 404);
       }

      if($request->previousurl != ''){
        Storage::delete($request->previousurl);
      }

      $path = $request->file('file')->store('public');

      $response = [
          'success' => true,
          'path' => $path,
          'message' => 'Page updated successfully.'
      ];

       return response()->json($response, 200);


    }

    public function destroy($id)
    {
        //
    }
}
