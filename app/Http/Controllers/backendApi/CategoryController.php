<?php

namespace App\Http\Controllers\backendApi;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{

    public function index()
    {

        $response = [
             'success' => true,
             'categories' => Category::all()->toArray(),
             'message' => 'Categories retrieved successfully.'
         ];

         return response()->json($response, 200);

    }

    public function show($id)
    {

      $category = Category::find($id)->toArray();

      if (is_null($category)) {
          $response = [
              'success' => false,
              'data' => 'Empty',
              'message' => 'Category not found.'
          ];
          return response()->json($response, 404);
      }


      $response = [
          'success' => true,
          'category' => $post,
          'message' => 'Category retrieved successfully.'
      ];

      return response()->json($response, 200);


    }

}
