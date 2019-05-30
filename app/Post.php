<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  protected $table = 'posts';

  protected $timestamps = true;

  protected $fillable = ['title', 'subtitle', 'expires_at', 'post_body'];

}
