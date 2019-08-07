<?php

namespace App\Http\Controllers\backendApi;

use App\Post;
use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Sunra\PhpSimple\HtmlDomParser;
use Intervention\Image\ImageManagerStatic as Image;

class PostController extends Controller
{

    public function index()
    {

      $response = [
           'success' => true,
           'posts' => array_reverse(Post::all()->each(function ($item, $key) {

            //Check if is a loremPixel url otherwise get url for img tag
             $urlSplit = explode("/",$item['image_url']);
             if (!in_array('lorempixel.com', $urlSplit)){
              $item['image_url'] = Storage::url($item['image_url']);
            }

            })->toArray()),
           'message' => 'Posts retrieved successfully.'
       ];

       return response()->json($response, 200);

    }


    public function store(Request $request)
    {
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

        $post = new Post;
        $post->metadescription_it = $request->metadescription_it;
        $post->metadescription_en = $request->metadescription_en;
        $post->title_it = $request->title_it;
        $post->title_en = $request->title_en;

        $html = HtmlDomParser::str_get_html($request->postbodytop_it);

        foreach ($html->find('img') as $element) {

          $image = str_replace('data:image/png;base64,', '', $element->src);
          $image = str_replace(' ', '+', $image);

          $png_url = "base64-".time();

          $savePath =  storage_path().'/app/public/' . $png_url . '.png';

          $srcPath = Storage::url($png_url . '.png');

          Image::make($image)->save($savePath, 80, 'png');

          $request->postbodytop_it = str_replace($element->src, $srcPath, $request->postbodytop_it);

        }

        $post->postbodytop_it = $request->postbodytop_it;
        $post->postbodytop_en = $request->postbodytop_en;
        $post->postbodybottom_it = $request->postbodybottom_it;
        $post->postbodybottom_en = $request->postbodybottom_en;
        $post->image_url = $request->file('image_url')->store('public');
        $post->category_id = $request->category_id;
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

      if (is_null($post)) {
          $response = [
              'success' => false,
              'data' => [],
              'message' => 'Post not found.'
          ];
          return response()->json($response, 404);
      }


      //Check if is a loremPixel url otherwise get url for img tag
      $urlSplit = explode("/",$post['image_url']);

      if (!in_array('lorempixel.com', $urlSplit)){

        $post['image_url'] = Storage::url($post['image_url']);

      }

      $postResponse = $post->toArray();

      $response = [
          'success' => true,
          'post' => $postResponse,
          'message' => 'Post retrieved successfully.'
      ];

      return response()->json($response, 200);
    }

    public function update(Request $request)
    {

      $input = $request->all();

      $post = Post::find($input['id']);

      if (is_null($post->toArray())) {
          $response = [
              'success' => false,
              'data' => 'Empty',
              'message' => 'Post not found.'
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

       Storage::delete($post->image_url);
       $post->metadescription_it = $request->metadescription_it;
       $post->metadescription_en = $request->metadescription_en;
       $post->title_it = $request->title_it;
       $post->title_en = $request->title_en;
       $post->postbodytop_it = $request->postbodytop_it;
       $post->postbodytop_en = $request->postbodytop_en;
       $post->postbodybottom_it = $request->postbodybottom_it;
       $post->postbodybottom_en = $request->postbodybottom_en;
       $post->image_url = $request->file('image_url')->store('public');
       $post->category_id = $request->category_id;



      //UPDATE OPS

      $post->save();

       $responseData = $post->toArray();

       $response = [
           'success' => true,
           'data' => $responseData,
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

      $data = $post->toArray();

      Storage::delete($post->image_url);

      $post->delete();

       $response = [
           'success' => true,
           'data' => $data,
           'message' => 'Post deleted successfully.'
       ];

     return response()->json($response, 200);
    }

}
