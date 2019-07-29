<?php

namespace App\Http\Controllers\frontendApi;

use App\Post;
use App\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class SearchController extends Controller
{

    public function index($querystring){

      $foundEvents = DB::table('events')->where('title_it', 'LIKE', "%{$querystring}%")->get()->each(function ($item, $key) {
          $item->type = 'eventi';
        });

      $foundPress = DB::table('posts')->whereCategoryId('1')->where('title_it', 'LIKE', "%{$querystring}%")->get()->each(function ($item, $key) {

          $item->type = 'press';

       });

      $foundArchive = DB::table('posts')->whereCategoryId('2')->where('title_it', 'LIKE', "%{$querystring}%")->get()->each(function ($item, $key) {

          $item->type = 'archivio';

       });

      $mergedColl = $foundEvents->merge($foundPress)->merge($foundArchive)->sortByDesc('created_at')->toArray();

      $response = [
           'success' => true,
           'results' => $mergedColl,
           'message' => 'response retrieved successfully.'
       ];

      return response()->json($response, 200);

    }


}
