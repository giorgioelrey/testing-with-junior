<?php

namespace App\Http\Controllers\backendApi;

use App\Image;
use Illuminate\Http\Request;
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


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
