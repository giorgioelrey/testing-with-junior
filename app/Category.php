<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Category extends Model
{

  use Sluggable;

  protected $table = 'categories';

  //protected $timestamps = true;

  //protected $fillable = ['name'];

  //******** RELATIONSHIPS *****************//

  //RELATIONSHIP CATEGORY(ONE) <-> POSTS(MANY)
  //One CATEGORY has many POSTS
  //One POST belongs to one CATEGORY
  public function posts()
  {
      return $this->hasMany('App\Post');
  }

  //RELATIONSHIP CATEGORY(ONE) <-> LOCATIONS(MANY)
  //One CATEGORY has many LOCATIONS
  //One LOCATION belongs to one CATEGORY
  public function locations()
  {
      return $this->hasMany('App\Location');
  }

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
