<?php


namespace App\QuillEditorHelper;

use Illuminate\Support\Facades\Facade;

class QuillEditorHelperFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'quilleditorhelper';
    }

}
