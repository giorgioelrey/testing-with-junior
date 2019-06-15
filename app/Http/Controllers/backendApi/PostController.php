<?php

namespace App\Http\Controllers\backendApi;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{

    public function index()
    {

      $response = [
           'success' => true,
           'posts' => Post::all()->toArray(),
           'message' => 'Posts retrieved successfully.'
       ];

       return response()->json($response, 200);

    }


    public function store(Request $request)
    {
      $input = $request->all();

        /*
        APPLY VALIDATOR
       $validator = Validator::make($input, [

       ]);

       if ($validator->fails()) {
           $response = [
               'success' => false,
               'data' => 'Validation Error.',
               'message' => $validator->errors()
           ];
           return response()->json($response, 404);
       }

       */

        $post = new Post;
        $post->fill($input);
        $post->save();
        $data = $post->toArray();

         $response = [
             'success' => true,
             'post' => $data,
             'message' => 'Post stored successfully.'
         ];

         return response()->json($response, 200);

    }


    public function show($id)
    {
      $post = Post::find($id);
      $data = $post->toArray();

      if (is_null($post)) {
          $response = [
              'success' => false,
              'data' => 'Empty',
              'message' => 'Post not found.'
          ];
          return response()->json($response, 404);
      }


      $response = [
          'success' => true,
          'post' => $data,
          'message' => 'Post retrieved successfully.'
      ];

      return response()->json($response, 200);
    }

    public function update(Request $request)
    {


      $input = $request->all();

      $post = Post::find($input['id']);
      $data = $post->toArray();

      if (is_null($post)) {
          $response = [
              'success' => false,
              'data' => 'Empty',
              'message' => 'Post not found.'
          ];
          return response()->json($response, 404);
      }

/*

      APPLY VALIDATION
       $validator = Validator::make($input, [
           'name' => 'required',
           'author' => 'required'
       ]);

       if ($validator->fails()) {
           $response = [
               'success' => false,
               'data' => 'Validation Error.',
               'message' => $validator->errors()
           ];
           return response()->json($response, 404);
       }

      */

      //UPDATE OPS
      $post->update($input);
      $post->save();

       $data = $post->toArray();

       $response = [
           'success' => true,
           'data' => $data,
           'message' => 'Post updated successfully.'
       ];

       return response()->json($response, 200);

    }

    public function destroy($id)
    {

      $post = Post::find($id);
      $data = $post->toArray();

      if (is_null($post)) {
          $response = [
              'success' => false,
              'data' => 'Empty',
              'message' => 'Post not found.'
          ];
          return response()->json($response, 404);
      }

      $post->delete();
      $data = $post->toArray();

       $response = [
           'success' => true,
           'data' => $data,
           'message' => 'Post deleted successfully.'
       ];

     return response()->json($response, 200);
    }

}
