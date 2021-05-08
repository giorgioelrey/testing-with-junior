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

//CATCH ALL ROUTES
Route::any('/', function(){
    return View::make('frontend.pages.test-page');
})->name('home');

Route::any('/{any}', function(){
    return redirect()->route('home');
})->where('any', '.*');
