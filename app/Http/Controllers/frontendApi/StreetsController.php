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

    public function show($id)
    {

        $street = Street::find($id)->toArray();

        if (is_null($street)) {
            $response = [
                'success' => false,
                'street' => [],
                'message' => 'Street not found.'
            ];
            return response()->json($response, 404);
        }

        $response = [
            'success' => true,
            'street' => $street,
            'message' => 'Street retrieved successfully.'
        ];

        return response()->json($response, 200);

    }

}
