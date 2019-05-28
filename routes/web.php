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
Route::get('storage/{img}', function ($img) {

    $path = storage_path($img);

    $mime = \File::mimeType($path);

    header('Content-type: ' . $mime);

    return readfile($path);

})->where('img', '(.*)');

Route::get('/', function () {
    return view('welcome');
});
Route::get('/admin', function () {
    return view('dashboard');
});
Route::get('/admin/pagina-base', function () {
    return view('pagina-base');
});
Route::get('/admin/create-new-page', function () {
    return view('create-new-page');
});
Route::get('/admin/login', function () {
    return view('login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
