<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//BACKEND

Route::view('/admin/{path?}', 'backend.layouts.app');

//FRONTEND

Route::name('frontend.pages.')->group(function () {

   //CHI-SIAMO

  Route::get('/{lang?}/chi-siamo', 'PageController@show')->name('chi-siamo');

  Route::get('/chi-siamo', function () {
    return redirect()->route('frontend.pages.chi-siamo', ['lang' => 'it']);
  });

  //SOCI

  Route::get('/{lang?}/soci', 'PageController@show')->name('soci');

  Route::get('/soci', function () {
    return redirect()->route('frontend.pages.soci', ['lang' => 'it']);
  });

  //EVENTI

  Route::get('/{lang?}/eventi', 'PageController@show')->name('eventi');

  Route::get('/eventi', function () {
    return redirect()->route('frontend.pages.eventi', ['lang' => 'it']);
  });

  //MNLOUNGE

  Route::get('/{lang?}/servizi-mnlounge', 'PageController@show')->name('servizi-mnlounge');

  Route::get('/servizi-mnlounge', function () {
    return redirect()->route('frontend.pages.servizi-mnlounge', ['lang' => 'it']);
  });

  //PRESS

  Route::get('/{lang?}/press', 'PageController@show')->name('press');

  Route::get('/press', function () {
    return redirect()->route('frontend.pages.press', ['lang' => 'it']);
  });

  //ARCHIVIO STORICO

  Route::get('/{lang?}/archivio-storico','PageController@show')->name('archivio-storico');

  Route::get('/archivio-storico', function () {
    return redirect()->route('frontend.pages.archivio-storico', ['lang' => 'it']);
  });

  //CONTATTI

  Route::get('/{lang?}/contatti', 'PageController@show')->name('contatti');

  Route::get('/contatti','PageController@show' );


    //HOME

    Route::get('/', function () {
        return view('frontend.pages.home', ['lang' => 'it']);
      })->name('home');

    Route::get('/{lang}', function ($lang) {

      if($lang === 'it' || $lang === 'en') {
        return view('frontend.pages.home', ['lang' => $lang]);
        } else {
          abort(404);
        }
     })->name('home');

});





Auth::routes();
