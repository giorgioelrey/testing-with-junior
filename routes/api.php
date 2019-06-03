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

Route::middleware('json.response')->group(function () {

    // public routes
    //->login - POST
    Route::post('/admin/login', 'backendApi\AuthController@login')->name('login.api');
    //->register - POST
    Route::post('/admin/register', 'backendApi\AuthController@register')->name('register.api');

});

// private routes

Route::middleware(['auth:api','json.response'])->group(function () {

  //->user - GET
  Route::get('/admin/user','backendApi\UserController@show')->name('user.show');
  //->logout - GET
  Route::get('/admin/logout', 'backendApi\AuthController@logout')->name('logout');
});
