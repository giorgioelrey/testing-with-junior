<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Post extends Model
{

  use Sluggable;

  protected $table = 'posts';

  protected $with = array('user', 'category');//relations gets passed in toArray()

  //public $timestamps = true;

  protected $fillable = [
                          'metadescription_it',
                          'metadescription_en',
                          'title_it',
                          'title_en',
                          'postbodytop_it',
                          'postbodytop_en',
                          'postbodybottom_it',
                          'postbodybottom_en'
                        ];

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

  /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
          'slug_it' => [
              'source' => 'title_it'
          ],
          'slug_en' => [
              'source' => 'title_en'
          ],
        ];
    }



}
