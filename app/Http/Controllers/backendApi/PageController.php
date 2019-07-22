<?php

namespace App\Http\Controllers\backendApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Page;
use Illuminate\Support\Facades\DB;

class PageController extends Controller
{

  public function index()
  {

    $pages = Page::all()->toArray();

    if (is_null($pages)) {
        $response = [
            'success' => false,
            'data' => [],
            'message' => 'No pages found.'
        ];
        return response()->json($response, 404);
    }

    $response = [
         'success' => true,
         'pages' => $pages,
         'message' => 'Pages retrieved successfully.'
     ];

     return response()->json($response, 200);

  }

  public function pagesNamesAndIds(){

    $pagesData = Page::all('id', 'name')->toArray();

    if (is_null($pages)) {
        $response = [
            'success' => false,
            'data' => [],
            'message' => 'No pages found.'
        ];
        return response()->json($response, 404);
    }

    $response = [
         'success' => true,
         'pagesData' => $pagesData,
         'message' => 'Pages data retrieved successfully.'
     ];

  }

  public function show($id)
  {
    $page = Page::find($id)->toArray();

    if (is_null($page)) {
        $response = [
            'success' => false,
            'data' => [],
            'message' => 'Page not found.'
        ];
        return response()->json($response, 404);
    }


    $response = [
        'success' => true,
        'page' => $page,
        'message' => 'Page retrieved successfully.'
    ];

    return response()->json($response, 200);
  }

  public function update($id, Request $request){

    $input = $request->all();

    $page = Page::find($id);

    if (is_null($page)) {
        $response = [
            'success' => false,
            'data' => [],
            'message' => 'Page not found.'
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

    $page->contents = json_encode($input);

    $page->save();

     $response = [
         'success' => true,
         'data' => json_encode($input),
         'message' => 'Page updated successfully.'
     ];

     return response()->json($response, 200);

  }
}
