<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{

    protected $table = 'services';

    protected $timestamps = true;

    protected $fillable = ['name', 'short_description', 'detail', 'starting_price'];
    
}
