<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Location extends Model
{

  use Sluggable;

  protected $table = 'locations';

  protected $fillable = ['name_it','name_en', 'slug_it', 'slug_en','address', 'latitude', 'longitude', 'phonenumber', 'email','description_it', 'description_en','thumbnail'];

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

    //******** RELATIONSHIPS *****************//

    //RELATIONSHIP CATEGORY(ONE) <-> LOCATIONS(MANY)
    //One CATEGORY has many LOCATIONS
    //One LOCATION belongs to one CATEGORY
    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    //RELATIONSHIP STREET(ONE) <-> LOCATIONS(MANY)
    //One STREET has many LOCATIONS
    //One LOCATION belongs to one STREET
    public function street()
    {
        return $this->belongsTo('App\Street');
    }

}
