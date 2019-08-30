<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Street extends Model
{

    protected $table = 'streets';


    //RELATIONSHIP STEET(ONE) <-> LOCATIONS(MANY)
    //One STREET has many LOCATIONS
    //One LOCATION belongs to one STREET
    public function locations()
    {
        return $this->hasMany('App\Location');
    }
}
