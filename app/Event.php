<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Event extends Model
{

  use Sluggable;

  protected $table = 'events';

  //protected $timestamps = true;

  protected $fillable = [
                          'metadescription_it',
                          'metadescription_en',
                          'title_it',
                          'title_en',
                          'description_it',
                          'description_en',
                          'date',
                          'address',
                          'time'
                        ];

  /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
          'slug_it' => [
              'source' => 'title_it'
          ],
          'slug_en' => [
              'source' => 'title_en'
          ],
        ];
    }

}
