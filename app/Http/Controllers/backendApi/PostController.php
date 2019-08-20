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
        $post->postbodytop_it = $this->convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->postbodytop_it);
        $post->postbodytop_en = $this->convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->postbodytop_en);
        $post->postbodybottom_it = $this->convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->postbodybottom_it);
        $post->postbodybottom_en = $this->convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->postbodybottom_en);
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

    public function prepareForUpdate($id){

      $post = Post::find($id);

      if (is_null($post)) {
          $response = [
              'success' => false,
              'data' => [],
              'message' => 'Post not found.'
          ];
          return response()->json($response, 404);
      }

      $html = HtmlDomParser::str_get_html($post->postbodytop_it);

      foreach ($html->find('img') as $element) {

        $image = Storage::get('public/'.str_replace("/storage/",'',$element->src));

        $imageBase64 = base64_encode($image);

        $post->postbodytop_it = str_replace($element->src, 'data:image/png;base64,  '.$imageBase64, $post->postbodytop_it);

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
       $post->postbodytop_it = $this->convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->postbodytop_it,true);
       $post->postbodytop_en = $this->convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->postbodytop_en,true);
       $post->postbodybottom_it = $this->convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->postbodybottom_it, true);
       $post->postbodybottom_en = $this->convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($request->postbodybottom_en,true);
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

      if (is_null($post)) {
          $response = [
              'success' => false,
              'data' => [],
              'message' => 'Post not found.'
          ];
          return response()->json($response, 404);
      }

      $deletedPost = $post->toArray();

      Storage::delete($post->image_url);
      $this->deleteAllImagesForField($post->postbodytop_it);
      $this->deleteAllImagesForField($post->postbodytop_en);
      $this->deleteAllImagesForField($post->postbodybottom_it);
      $this->deleteAllImagesForField($post->postbodybottom_en);

      $post->delete();

       $response = [
           'success' => true,
           'data' => $deletedPost,
           'message' => 'Post deleted successfully.'
       ];

     return response()->json($response, 200);
    }

    public function convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($field, $isUpdate=false){

        $html = HtmlDomParser::str_get_html($field);

        foreach ($html->find('img') as $element) {

            if ($isUpdate){



            } else {

                $image = extractDataFromBase64Src($element->src);

                $savedImageSrcPath = saveBase64ImageAndReturnStoredPath($image);

                $field = str_replace($element->src, $savedImageSrcPath, $field);

            }


        }

        return field;
    }

   public function extractDataFromBase64Src($src){

       $image = str_replace('data:image/png;base64,', '', $src);
       $image = str_replace(' ', '+', $image);

        return $image;
   }

   public function deleteAllImagesForField($field){

       $html = HtmlDomParser::str_get_html($field);

       foreach ($html->find('img') as $element) {

           Storage::delete($element->src);
       }

   }

    public function saveBase64ImageAndReturnStoredPath($base64Image){

        $png_url = "base64-".time();

        $savePath =  storage_path().'/app/public/' . $png_url . '.png';

        $srcPath = Storage::url($png_url . '.png');

        Image::make($base64Image)->save($savePath, 80, 'png');

        return $srcPath;

    }

}
