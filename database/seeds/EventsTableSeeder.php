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

          $event->title = $faker->sentence($nbWords = 3, $variableNbWords = true);
          $event->subtitle = $faker->sentence($nbWords = 4, $variableNbWords = true);
          $event->address = $faker->address;
          $event->description = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
          $event->date = $faker->dateTimeThisMonth($max = 'now', $timezone = 'Europe/Paris');

          $event->save();



      }
    }
}
