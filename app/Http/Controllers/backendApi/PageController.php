<?php

namespace App\Http\Controllers\backendApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageController extends Controller
{

  public function index()
  {
    $response = [
         'success' => true,
         'data' => ['Visit us', 'Places', 'Blog'],//placeholder
         'message' => 'Pages retrieved successfully.'
     ];

     return response()->json($response, 200);

  }

}
