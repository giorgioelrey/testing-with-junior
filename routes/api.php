<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('json.response')->namespace('backendApi')->group(function () {

    // public routes
    //->login - POST
    Route::post('/admin/login', 'AuthController@login')->name('login.api');




});

// private routes

Route::middleware(['auth:api','json.response'])->namespace('backendApi')->group(function () {

  //->user - GET
  Route::get('/admin/user','UserController@show')->name('user.show');
  //->logout - GET
  Route::get('/admin/logout', 'AuthController@logout')->name('logout');

  //->register - POST
  Route::post('/admin/register', 'AuthController@register')->name('register.api');

  Route::get('/admin/post/all', 'PostController@index')->name('post.all');

  Route::get('/admin/post/{id}', 'PostController@show')->name('post.show');

  Route::post('/admin/post/store', 'PostController@store')->name('post.store.api');

  Route::post('/admin/post/update', 'PostController@update')->name('post.all');

  Route::delete('/admin/post/destroy/{id}', 'PostController@destroy')->name('post.all');

  Route::get('/admin/pages/all', 'PageController@index')->name('pages.all');




});
