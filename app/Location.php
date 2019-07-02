<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Location extends Model
{

  use Sluggable;

  protected $table = 'locations';

  protected $timestamps = true;

  protected $fillable = ['name', 'address', 'phone_number', 'email','description','thumbnail'];

  /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

}
