<?php

use Illuminate\Database\Seeder;
use App\Event;
use Faker\Generator as Faker;
use Faker\Factory as FakerFactory;

class EventsTableSeeder extends Seeder
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

          $event = new Event;
          $event->metadescription_it = $faker->sentence($nbWords = 3, $variableNbWords = true);
          $event->metadescription_en = $faker->sentence($nbWords = 3, $variableNbWords = true);
          $event->title_it = $faker->sentence($nbWords = 3, $variableNbWords = true);
          $event->title_en = $faker->sentence($nbWords = 3, $variableNbWords = true);
          $event->address = $faker->address;
          $event->bodytop_it = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
          $event->bodytop_en= $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
          $event->bodybottom_it= $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
          $event->bodybottom_en = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
          $event->start_date = $faker->dateTimeThisMonth($max = 'now', $timezone = 'Europe/Paris');
          $event->start_time = $faker->dateTimeThisMonth($max = 'now', $timezone = 'Europe/Paris');
          $event->end_date = $event->start_date;
          $event->end_time = $event->start_time;
          $event->image_url = $faker->imageUrl(640, 480, 'city');
          $event->save();

      }
    }
}
