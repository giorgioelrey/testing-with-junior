<?php

namespace App\Http\Controllers\frontendApi;

use App\Street;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StreetsController extends Controller
{
    public function index()
    {

        $response = [
            'success' => true,
            'streets' => Street::all()->toArray(),
            'message' => 'Streets retrieved successfully.'
        ];

        return response()->json($response, 200);

    }
}
