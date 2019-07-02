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

            $newsPost->title = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $newsPost->post_body = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $newsPost->date = $faker->dateTimeInInterval($startDate = 'now', $interval = '+ 90 days', $timezone = 'Europe/Paris');
            $newsPost->category_id = 1;
            $newsPost->image_url = $faker->imageUrl(640, 480, 'city');
            $newsPost->save();

        }

          for ($i=0; $i < 30; $i++) {

            $archivePost = new Post;

            $archivePost->title = $faker->sentence($nbWords = 3, $variableNbWords = true);
            $archivePost->post_body = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
            $archivePost->date = $faker->dateTimeThisMonth($max = 'now', $timezone = 'Europe/Paris');
            $archivePost->category_id = 2;
            $archivePost->image_url = $faker->imageUrl(640, 480, 'city');
            $archivePost->save();

        }

    }
}
