<?php

namespace App\Providers;

use App\QuillEditorHelper\QuillEditorHelper;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\App;

class QuillEditorHelperServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('quilleditorhelper',function(){

            return new QuillEditorHelper();

        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
