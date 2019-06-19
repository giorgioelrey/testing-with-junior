<?php

namespace App\Http\Controllers\frontendApi;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB ;


class PostController extends Controller
{

  public function archive(){

    $post = DB::table('posts')->where('category_id', '=', 2)->get();
    $data = $post->toArray();

    if (is_null($post)) {
        $response = [
            'success' => false,
            'archive' => [],
            'message' => 'Archive Posts not found.'
        ];
        return response()->json($response, 404);
    }


    $response = [
        'success' => true,
        'archive' => $data,
        'message' => 'Archive Posts retrieved successfully.'
    ];

    return response()->json($response, 200);
  }


  public function press(){

    $post = DB::table('posts')->where('category_id', '=', 1)->get();
    $data = $post->toArray();

    if (is_null($post)) {
        $response = [
            'success' => false,
            'press' => [],
            'message' => 'Press Posts not found.'
        ];
        return response()->json($response, 404);
    }


    $response = [
        'success' => true,
        'press' => $data,
        'message' => 'Press Posts retrieved successfully.'
    ];

    return response()->json($response, 200);
  }

}
