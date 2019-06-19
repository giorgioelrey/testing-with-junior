<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
  protected $table = 'locations';

  protected $timestamps = true;

  protected $fillable = ['name', 'address', 'phone_number', 'email','description','thumbnail'];

}
