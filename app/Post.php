<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  protected $table = 'posts';

  //public $timestamps = true;

  //protected $fillable = ['title', 'subtitle', 'expires_at', 'post_body','slug'];

  //******** RELATIONSHIPS *****************//

  //RELATIONSHIP USER(ONE) <-> POSTS(MANY)
  //One User(author) has many posts
  //One Post belongs to one User (Author)
  public function user()
  {
      return $this->belongsTo('App\User');
  }

  //RELATIONSHIP CATEGORY(ONE) <-> POSTS(MANY)
  //One CATEGORY has many POSTS
  //One POST belongs to one CATEGORY
  public function category()
  {
      return $this->belongsTo('App\Category');
  }




}
