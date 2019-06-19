<?php

namespace App\Http\Controllers\backendApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Page;

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

}
