<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
  protected $table = 'categories';

  protected $timestamps = true;

  protected $fillable = ['name'];


  
}
