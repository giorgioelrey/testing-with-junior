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
use App\Street;
use App\Event;
use App\Post;
use App\Location;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

//BACKEND

Route::view('/admin/{path?}', 'backend.layouts.app');
Route::view('/admin/dashboard/{path?}', 'backend.layouts.app');
Route::view('/admin/dashboard/{path?}/{path2?}', 'backend.layouts.app');
Route::view('/admin/dashboard/{path?}/{path2?}/{path3?}', 'backend.layouts.app');
Route::view('/admin/dashboard/{path?}/{path2?}/{path3?}/{path4?}', 'backend.layouts.app');
Route::view('/admin/dashboard/{path?}/{path2?}/{path3?}/{path4?}/{path5?}', 'backend.layouts.app');

//FRONTEND

Route::group(
[
	'prefix' => LaravelLocalization::setLocale(),
	'middleware' => [ 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath','localize' ]
],
function() {

	/** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/

	//CHI SIAMO

	Route::get(LaravelLocalization::transRoute('routes.chi-siamo'), function(Request $request) {

    $dynamicPage = Page::whereName('chi-siamo')->get();

    $contents = json_decode($dynamicPage->first()->contents);

		foreach ($contents as &$content) {
			if($content->type == 'image' && !empty($content->data)){
				$content->data = Storage::url($content->data);
			}
		}

		return View::make('frontend.pages.chi-siamo',['lang' => LaravelLocalization::setLocale(), 'contents' => $contents]);
	})->name('fe.chi-siamo');


	//BRAND
	Route::get(LaravelLocalization::transRoute('routes.brand'), function() {

	    $streets = Street::all()->toArray();
			$dynamicPage = Page::whereName('brand')->get();

			$contents = json_decode($dynamicPage->first()->contents);

			foreach ($contents as &$content) {
				if($content->type == 'image' && !empty($content->data)){

					$content->data = Storage::url($content->data);

				}
			}

		return View::make('frontend.pages.brand',[
		    'lang' => LaravelLocalization::setLocale(),
            'streets' => $streets,
						'contents'=> $contents
        ]);

			})->name('fe.brand');










	//EVENTI

	Route::get(LaravelLocalization::transRoute('routes.eventi'), function() {
		return View::make('frontend.pages.eventi',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.eventi');

	Route::get(LaravelLocalization::transRoute('routes.eventi-single'), function($slug) {

		$locale = LaravelLocalization::setLocale();
		$event = ($locale == 'it') ? Event::whereSlugIt($slug)->first() : Event::whereSlugEn($slug)->first();
		$otherLangUrl = '/'. (($locale == 'it') ? 'en': 'it') . '/'.(($locale == 'it') ? 'events': 'eventi').'/'.(($locale == 'it') ? $event->slug_en: $event->slug_it);
		//Check if is a loremPixel url otherwise get url for img tag
		 $urlSplit = explode("/",$event->image_url);
		 if (!in_array('lorempixel.com', $urlSplit)){
		$event->image_url = Storage::url($event->image_url);
		}

		return View::make('frontend.pages.evento-single',['lang' => $locale, 'slug' => $slug, 'event' => $event->toArray(), 'otherLangUrl' => $otherLangUrl]);
	})->name('fe.evento-single');




	//MN-VIP-LOUNGE

	Route::get(LaravelLocalization::transRoute('routes.mn-vip-lounge'), function(Request $request) {

    $dynamicPage = Page::whereName('mn-vip-lounge')->get();

    $contents = json_decode($dynamicPage->first()->contents);

		foreach ($contents as &$content) {
			if($content->type == 'image' && !empty($content->data)){

				$content->data = Storage::url($content->data);

			}
		}

		return View::make('frontend.pages.mn-vip-lounge',['lang' => LaravelLocalization::setLocale(), 'contents' => $contents]);
	})->name('fe.mn-vip-lounge');




	//ARCHIVIO STORICO

	Route::get(LaravelLocalization::transRoute('routes.archivio-storico'), function() {
		return View::make('frontend.pages.archivio-storico',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.archivio-storico');

	Route::get(LaravelLocalization::transRoute('routes.archivio-storico-single'), function($slug) {

		$locale = LaravelLocalization::setLocale();
		$post = ($locale == 'it') ? Post::whereSlugIt($slug)->first() : Post::whereSlugEn($slug)->first();

		$otherLangUrl = '/'. (($locale == 'it') ? 'en': 'it') . '/'.(($locale == 'it') ? 'heritage-archive': 'archivio-storico').'/'.(($locale == 'it') ? $post->slug_en: $post->slug_it);

		//Check if is a loremPixel url otherwise get url for img tag
		 $urlSplit = explode("/",$post->image_url);
		 if (!in_array('lorempixel.com', $urlSplit)){
		$post->image_url = Storage::url($post->image_url);
		}
		return View::make('frontend.pages.post-single',['lang' => $locale, 'slug' => $slug, 'post' => $post->toArray(), 'otherLangUrl' => $otherLangUrl]);
	})->name('fe.archivio-storico-single');



	//PRESS

	Route::get(LaravelLocalization::transRoute('routes.press'), function() {
		return View::make('frontend.pages.press',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.press');

	Route::get(LaravelLocalization::transRoute('routes.press-single'), function($slug) {

		$locale = LaravelLocalization::setLocale();
		$post = ($locale == 'it') ? Post::whereSlugIt($slug)->first() : Post::whereSlugEn($slug)->first();
		$otherLangUrl = '/'. (($locale == 'it') ? 'en': 'it') . "/press/".(($locale == 'it') ? $post->slug_en: $post->slug_it);


		//Check if is a loremPixel url otherwise get url for img tag
		 $urlSplit = explode("/",$post->image_url);
		 if (!in_array('lorempixel.com', $urlSplit)){
		$post->image_url = Storage::url($post->image_url);
		}

		return View::make('frontend.pages.post-single',['lang' => $locale, 'slug' => $slug, 'post' => $post->toArray(), 'otherLangUrl' => $otherLangUrl]);
	})->name('fe.post-single');



	//SEARCH

	Route::get(LaravelLocalization::transRoute('routes.search'), function() {
		return View::make('frontend.pages.search',['lang' => LaravelLocalization::setLocale()]);
	})->name('fe.search');



	//CONTATTI

	Route::get(LaravelLocalization::transRoute('routes.contatti'),function(Request $request) {

    $dynamicPage = Page::whereName('contatti')->get();

		$contents = json_decode($dynamicPage->first()->contents);

		foreach ($contents as &$content) {
			if($content->type == 'image' && !empty($content->data)){

				$content->data = Storage::url($content->data);

			}
		}

		return View::make('frontend.pages.contatti',['lang' => LaravelLocalization::setLocale(), 'contents' => $contents]);
	})->name('fe.contatti');


	//VENDEMMIA

	Route::get(LaravelLocalization::transRoute('routes.vendemmia'),function(Request $request) {

    $dynamicPage = Page::whereName('vendemmia')->get();

		$contents = json_decode($dynamicPage->first()->contents);

		foreach ($contents as &$content) {
			if($content->type == 'image' && !empty($content->data)){

				$content->data = Storage::url($content->data);

			}
		}

		return View::make('frontend.pages.vendemmia',['lang' => LaravelLocalization::setLocale(), 'contents' => $contents]);
	})->name('fe.vendemmia');

	//MAIL

    Route::get('send-contact-mail/{page}', 'SendMailController@sendContactFormMail')->name('routes.sendmail');

	//HOME

  Route::get(LaravelLocalization::transRoute('routes.home'), function() {

		$dynamicPage = Page::whereName('home')->get();

		$contents = json_decode($dynamicPage->first()->contents);

		foreach ($contents as &$content) {
			if($content->type == 'image' && !empty($content->data)){
				$content->data = Storage::url($content->data);
			}
		}

		$locations = Location::all()->each(function ($item, $key) {

		 //Check if is a loremPixel url otherwise get url for img tag
			$urlSplit = explode("/",$item->image_url);
			if (!in_array('montenapoleone', $urlSplit)){
			 $item->image_url = Storage::url($item->image_url);
		 }

	 })->toArray();

		return View::make('frontend.pages.home',[
			'lang' => LaravelLocalization::setLocale(),
			'locations' => $locations,
			'contents' => $contents,
	]);
	})->name('fe.home');

});


Auth::routes();
