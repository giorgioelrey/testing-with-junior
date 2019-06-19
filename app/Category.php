<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
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

}
