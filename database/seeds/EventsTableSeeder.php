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
          $event->description_en = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
          $event->description_it = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
          $event->date = $faker->dateTimeThisMonth($max = 'now', $timezone = 'Europe/Paris');
          $event->time = $faker->dateTimeThisMonth($max = 'now', $timezone = 'Europe/Paris');
          $event->image_url = $faker->imageUrl(640, 480, 'city');
          $event->save();

      }
    }
}
