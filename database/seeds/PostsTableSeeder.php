<?php

use Illuminate\Database\Seeder;
use App\Post;
use Faker\Generator as Faker;
use Faker\Factory as FakerFactory;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

          $faker = FakerFactory::create('it_IT');

          for ($i=0; $i < 30; $i++) {

            $newsPost = new Post;

            $newsPost->metadescription_it = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $newsPost->metadescription_en = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $newsPost->title_it = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $newsPost->title_en = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $newsPost->postbodytop_it = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $newsPost->postbodytop_en = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $newsPost->postbodybottom_it = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $newsPost->postbodybottom_en = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $newsPost->date = $faker->dateTimeInInterval($startDate = 'now', $interval = '+ 90 days', $timezone = 'Europe/Paris');
            $newsPost->category_id = 1;
            $newsPost->image_url = $faker->imageUrl(640, 480, 'city');
            $newsPost->save();

        }

          for ($i=0; $i < 30; $i++) {

            $archivePost = new Post;

            $archivePost->metadescription_it = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $archivePost->metadescription_en = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $archivePost->title_it = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $archivePost->title_en = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $archivePost->postbodytop_it = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $archivePost->postbodytop_en = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $archivePost->postbodybottom_it = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $archivePost->postbodybottom_en = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $archivePost->date = $faker->dateTimeThisMonth($max = 'now', $timezone = 'Europe/Paris');
            $archivePost->category_id = 2;
            $archivePost->image_url = $faker->imageUrl(640, 480, 'city');
            $archivePost->save();

        }

    }
}
