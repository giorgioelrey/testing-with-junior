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

    //if it's not a static page we will be able to retrieve a Page object
    //containing a contents property otherwise prepare an empty array for the page

    $dynamicPage = Page::whereName($desiredPage)->get();

    $contents = $dynamicPage->isNotEmpty() ? json_decode($dynamicPage->first()->contents) : [];

    //if lang was chosen by the user or by redirect (ex. 'it/chi-siamo')
    if($lang === 'it' || $lang === 'en') {
      return view('frontend.pages.' . $desiredPage, ['lang' => $lang, 'contents' => $contents] );
    }

    //if lang was not typed in the url but endpoint is available (ex. '/chi-siamo')
     if ($lang === null){
      return redirect()->route('frontend.pages.' . $desiredPage, ['lang' => 'it', 'contents' => $contents]);
    }

    //Not existing page
    abort(404);

  }

}
