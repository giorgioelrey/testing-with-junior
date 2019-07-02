<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Service extends Model
{

    use Sluggable;

    protected $table = 'services';

    protected $timestamps = true;

    protected $fillable = ['name', 'short_description', 'detail', 'starting_price'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
          'slug_it' => [
              'source' => 'name_it'
          ],
          'slug_en' => [
              'source' => 'name_en'
          ],
        ];
    }

}
