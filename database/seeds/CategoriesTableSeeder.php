<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $catNews = new Category;
      $catNews->name = 'news';
      $catNews->entity = 'post';
      $catNews->save();

      $catArchivio = new Category;
      $catArchivio->name = 'archivio-storico';
      $catArchivio->entity = 'post';
      $catArchivio->save();

      $catHotels = new Category;
      $catHotels->name = 'hotels';
      $catHotels->entity = 'location';
      $catHotels->save();

      $catBoutiques = new Category;
      $catBoutiques->name = 'boutiques';
      $catBoutiques->entity = 'location';
      $catBoutiques->save();


    }
}
