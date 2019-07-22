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
      $catNews->name_it = 'news';
      $catNews->name_en = 'news';
      $catNews->entity = 'post';
      $catNews->save();

      $catArchivio = new Category;
      $catArchivio->name_it = 'archivio-storico';
      $catArchivio->name_en = 'archive';
      $catArchivio->entity = 'post';
      $catArchivio->save();

      $catHotels = new Category;
      $catHotels->name_it = 'hotels';
      $catHotels->name_en = 'hotels';
      $catHotels->entity = 'location';
      $catHotels->save();

      $catBoutiques = new Category;
      $catBoutiques->name_it = 'boutiques';
      $catBoutiques->name_en = 'boutiques';
      $catBoutiques->entity = 'location';
      $catBoutiques->save();


    }
}
