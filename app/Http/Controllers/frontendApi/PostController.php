<?php

namespace App\Http\Controllers\frontendApi;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB ;
use Illuminate\Support\Facades\Storage;


class PostController extends Controller
{

  public function archive(){

    $posts = DB::table('posts')->where('category_id', '=', 2)->get()->each(function ($item, $key) {

     //Check if is a loremPixel url otherwise get url for img tag
      $urlSplit = explode("/",$item->image_url);
      if (!in_array('lorempixel.com', $urlSplit)){
       $item->image_url = Storage::url($item->image_url);
     }

   })->toArray();

    if (is_null($posts)) {
        $response = [
            'success' => false,
            'archive' => [],
            'message' => 'Archive Posts not found.'
        ];
        return response()->json($response, 404);
    }


    $response = [
        'success' => true,
        'archive' => $posts,
        'message' => 'Archive Posts retrieved successfully.'
    ];

    return response()->json($response, 200);
  }


  public function press(){

    $posts = DB::table('posts')->where('category_id', '=', 1)->get()->each(function ($item, $key) {

     
     //Check if is a loremPixel url otherwise get url for img tag
      $urlSplit = explode("/",$item->image_url);
      if (!in_array('lorempixel.com', $urlSplit)){
       $item->image_url = Storage::url($item->image_url);
     }


     })->toArray();

    if (is_null($posts)) {
        $response = [
            'success' => false,
            'press' => [],
            'message' => 'Press Posts not found.'
        ];
        return response()->json($response, 404);
    }


    $response = [
        'success' => true,
        'press' => $posts,
        'message' => 'Press Posts retrieved successfully.'
    ];

    return response()->json($response, 200);
  }

}
