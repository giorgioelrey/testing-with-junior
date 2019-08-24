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


//***********************//
//***********************//
//******* BACKEND *******//
//***********************//
//***********************//

//BACKEND -> PUBLIC

Route::middleware('json.response')->namespace('backendApi')->name('be.api.')->group(function () {

    //**** login - POST ******//
    Route::post('/admin/login', 'AuthController@login')->name('login');

    //****** IMAGES ****//
    Route::post('/admin/image/store', 'ImageController@store')->name('image.store');


      //->register - POST //abilitare solo per la popolazione iniziale dell'userAdmin
    Route::post('/admin/register', 'AuthController@register')->name('register.api');


});

//BACKEND -> AUTHENTICATED

Route::middleware(['auth:api','throttle:60,1','json.response'])->namespace('backendApi')->name('be.api.')->group(function () {

  //->user - GET
  //Route::get('/admin/user','UserController@show')->name('user.show');
  //->logout - GET
  Route::get('/admin/logout', 'AuthController@logout')->name('logout');


  //****** POSTS ****//

  Route::get('/admin/post/all', 'PostController@index')->name('post.all');

  Route::get('/admin/post/{id}', 'PostController@show')->name('post.show');

  Route::post('/admin/post/store', 'PostController@store')->name('post.store');

  Route::get('/admin/post/get-for-update/{id}', 'PostController@prepareForUpdate')->name('post.prepareupdate');

  Route::post('/admin/post/update', 'PostController@update')->name('post.update');

  Route::delete('/admin/post/destroy/{id}', 'PostController@destroy')->name('post.destroy');

  //****** LOCATIONS ****//

  Route::get('/admin/locations/all', 'LocationController@index')->name('location.all');

  Route::get('/admin/location/{id}', 'LocationController@show')->name('location.show');

  Route::post('/admin/location/store', 'LocationController@store')->name('location.store');

  Route::post('/admin/location/update', 'LocationController@update')->name('location.update');

  Route::delete('/admin/location/destroy/{id}', 'LocationController@destroy')->name('location.destroy');

  //****** EVENTS ****//

  Route::get('/admin/events/all', 'EventController@index')->name('event.all');

  Route::get('/admin/events/show/by-month/{month}', 'EventController@showByMonth')->name('event.byMonth');

  Route::get('/admin/events/show/by-date/{date}', 'EventController@showByDate')->name('event.byDate');

  Route::get('/admin/event/show/id/{id}', 'EventController@showById')->name('event.showById');

  Route::post('/admin/event/store', 'EventController@store')->name('event.store');

  Route::post('/admin/event/update', 'EventController@update')->name('event.update');

  Route::delete('/admin/event/destroy/{id}', 'EventController@destroy')->name('event.destroy');


  //****** PAGES ****//


  Route::get('/admin/pages/all', 'PageController@index')->name('pages.all');

  Route::get('/admin/pages/name-ids', 'PageController@pagesNamesAndIds')->name('pages.nameIds');

  Route::get('/admin/pages/show/id/{id}', 'PageController@show')->name('pages.showById');

  Route::post('admin/pages/update/{id}', 'PageController@update')->name('pages.update');

  //****** CATEGORIES ****//

  Route::get('/admin/categories/all', 'CategoryController@index')->name('categories.all');

  Route::get('/admin/categories/entity/post', 'CategoryController@getForPost')->name('categories.post');

  Route::get('/admin/categories/entity/location', 'CategoryController@getForLocation')->name('categories.location');

  Route::get('/admin/categories/show/{id}', 'CategoryController@show')->name('categories.show');

  //******* IMAGES ******//

  Route::post('/admin/image/update-and-get-path','ImageController@updateImageAndReturnPath')->name('image.update');


});


//***********************//
//***********************//
//******* FRONTEND ******//
//***********************//
//***********************//

//FRONTEND -> PUBLIC

Route::middleware(['json.response','throttle:100,1'])->namespace('frontendApi')->name('fe.api.')->group(function () {

    //****** EVENTS ****//

    Route::get('/events', 'EventController@index')->name('events.all');

    Route::get('/events/date/{date}', 'EventController@showByDate')->name('event.date');

    Route::get('/events/month/{month}', 'EventController@showByMonth')->name('event.month');

    Route::get('/events/days-for/year/{year}/month/{month}', 'EventController@daysForMonthInYear')->name('event.daysForMonthInYear');

    //****** POSTS -> PRESS ****//

    Route::get('/posts/press', 'PostController@press')->name('posts.press');

    //****** POSTS -> ARCHIVE ****//

    Route::get('/posts/archive', 'PostController@archive')->name('posts.archive');

    //****** PAGES ****//

    Route::get('/admin/page/{id}/{lang}', 'PageController@id')->name('pages.byId');

    //****** SEARCH ****//

    Route::get('/search/{querystring}', 'SearchController@index')->name('search.query');


});
