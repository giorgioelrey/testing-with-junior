<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Page;


class PageController extends Controller
{

  public function show($lang = null, Request $request ){

    //get url and find pageName
    $urlSplit = explode('/', $request->getRequestUri());
    $desiredPage = array_values(array_slice($urlSplit, -1))[0];

    //if lang was chosen by the user or by redirect (ex. 'it/chi-siamo')
    if($lang === 'it' || $lang === 'en') {
      return view('frontend.pages.' . $desiredPage, ['lang' => $lang]);
    }

    //if lang was not typed in the url but endpoint is available (ex. '/chi-siamo')
     if ($lang === null){
      return redirect()->route('frontend.pages.' . $desiredPage, ['lang' => 'it']);
    }

    //Not existing page
    abort(404);


  }

}
