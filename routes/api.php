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

Route::middleware('json.response')->namespace('backendApi')->name('be.api.')->group(function () {

    // public routes
    //->login - POST
    Route::post('/admin/login', 'AuthController@login')->name('login');


});

// private routes

Route::middleware(['auth:api','json.response'])->namespace('backendApi')->name('be.api.')->group(function () {

  //->user - GET
  Route::get('/admin/user','UserController@show')->name('user.show');
  //->logout - GET
  Route::get('/admin/logout', 'AuthController@logout')->name('logout');

  //->register - POST
  //Route::post('/admin/register', 'AuthController@register')->name('register.api');

  //****** POSTS ****//

  Route::get('/admin/post/all', 'PostController@index')->name('post.all');

  Route::get('/admin/post/{id}', 'PostController@show')->name('post.show');

  Route::post('/admin/post/store', 'PostController@store')->name('post.store');

  Route::post('/admin/post/update', 'PostController@update')->name('post.update');

  Route::delete('/admin/post/destroy/{id}', 'PostController@destroy')->name('post.destroy');


  Route::get('/admin/events/all', 'EventController@index')->name('event.all');

  Route::get('/admin/events/by-month/{month}', 'EventController@showByMonth')->name('event.byMonth');

  Route::get('/admin/event/date/{date}', 'EventController@showByDate')->name('event.byDate');

  Route::get('/admin/event/id/{id}', 'EventController@showById')->name('event.showById');

  Route::post('/admin/event/store', 'EventController@store')->name('event.store');

  Route::post('/admin/event/update', 'EventController@update')->name('event.update');

  Route::delete('/admin/event/destroy/{id}', 'EventController@destroy')->name('event.destroy');


  Route::get('/admin/pages/all', 'PageController@index')->name('pages.all');


});

Route::middleware('json.response')->namespace('frontendApi')->name('fe.api.')->group(function () {

    // public routes

    Route::get('/events', 'EventController@index')->name('events.all');

    Route::get('/events/date/{date}', 'EventController@showByDate')->name('event.date');

    Route::get('/events/month/{month}', 'EventController@showByMonth')->name('event.month');


});
