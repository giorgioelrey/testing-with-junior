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
