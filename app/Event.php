<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
  protected $table = 'events';

  protected $timestamps = true;

  protected $fillable = ['title', 'subtitle','description','date', 'address'];

}
