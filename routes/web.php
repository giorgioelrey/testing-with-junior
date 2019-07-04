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
use App\Page;
use Illuminate\Http\Request;

//BACKEND

Route::view('/admin/{path?}', 'backend.layouts.app');

//FRONTEND

Route::group(
[
	'prefix' => LaravelLocalization::setLocale(),
	'middleware' => [ 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath','localize' ]
],
function() {
	/** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/



	Route::get(LaravelLocalization::transRoute('routes.chi-siamo'), function(Request $request) {

    $dynamicPage = Page::whereName('chi-siamo')->get();

    $contents = json_decode($dynamicPage->first()->contents);

		return View::make('frontend.pages.chi-siamo',['lang' => LaravelLocalization::setLocale(), 'contents' => $contents]);
	})->name('fe.chi-siamo');

	Route::get(LaravelLocalization::transRoute('routes.brand'), function() {
		return View::make('frontend.pages.brand',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.brand');

	Route::get(LaravelLocalization::transRoute('routes.eventi'), function() {
		return View::make('frontend.pages.eventi',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.eventi');

	Route::get(LaravelLocalization::transRoute('routes.mn-vip-lounge'), function(Request $request) {

    $dynamicPage = Page::whereName('mn-vip-lounge')->get();

    $contents = json_decode($dynamicPage->first()->contents);

		return View::make('frontend.pages.mn-vip-lounge',['lang' => LaravelLocalization::setLocale(), 'contents' => $contents]);
	})->name('fe.mn-vip-lounge');

	Route::get(LaravelLocalization::transRoute('routes.archivio-storico'), function() {
		return View::make('frontend.pages.archivio-storico',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.archivio-storico');

	Route::get(LaravelLocalization::transRoute('routes.press'), function() {
		return View::make('frontend.pages.press',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.press');

	Route::get(LaravelLocalization::transRoute('routes.search'), function() {
		return View::make('frontend.pages.search',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.search');

	Route::get(LaravelLocalization::transRoute('routes.contatti'),function(Request $request) {

    $dynamicPage = Page::whereName('contatti')->get();

    $contents = json_decode($dynamicPage->first()->contents);

		return View::make('frontend.pages.contatti',['lang' => LaravelLocalization::setLocale(), 'contents' => $contents]);
	})->name('fe.contatti');

  Route::get(LaravelLocalization::transRoute('routes.home'), function() {
		return View::make('frontend.pages.home',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.home');

});

Auth::routes();
