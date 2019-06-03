<?php

namespace App\Http\Controllers\backendApi;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
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
           'data' => Post::all()->toArray(),
           'message' => 'Books retrieved successfully.'
       ];

       return response()->json($response, 200);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

         $post = Post::create($input);
         $data = $post->toArray();

         $response = [
             'success' => true,
             'data' => $data,
             'message' => 'Post stored successfully.'
         ];

         return response()->json($response, 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
      $post = Post::find($post->id);
      $data = $book->toArray();

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
          'data' => $data,
          'message' => 'Post retrieved successfully.'
      ];

      return response()->json($response, 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
      $input = $request->all();

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
      //$post->title = $input['title'];

       $post->save();

       $data = $post->toArray();

       $response = [
           'success' => true,
           'data' => $data,
           'message' => 'Post updated successfully.'
       ];

       return response()->json($response, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
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
