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

Route::get('/', function () {
    return view('frontend.pages.home');
});
Route::get('/chi siamo', function () {
    return view('frontend.pages.chi siamo');
});
Route::get('/soci', function () {
    return view('frontend.pages.soci');
});
Route::get('/eventi', function () {
    return view('frontend.pages.eventi');
});
Route::get('/servizi-mnlounge', function () {
    return view('frontend.pages.servizi-mnlounge');
});
Route::get('/press', function () {
    return view('frontend.pages.press');
});
Route::get('/archivio-storico', function () {
    return view('frontend.pages.archivio-storico');
});
Route::get('/contatti', function () {
    return view('frontend.pages.contatti');
});

Auth::routes();
