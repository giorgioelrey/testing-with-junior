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
      $catNews->save();

      $catArchivio = new Category;
      $catArchivio->name = 'archivio-storico';
      $catArchivio->save();
    }
}
