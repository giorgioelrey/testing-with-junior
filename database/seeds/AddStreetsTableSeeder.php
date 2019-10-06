<?php

use Illuminate\Database\Seeder;
use App\Street;

class AddStreetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $spiga = new Street();
      $spiga->name_it = "Via della Spiga";
      $spiga->save();

      $orto = new Street();
      $orto->name_it = "Via San Pietro all'Orto";
      $orto->save();

      $rossa = new Street();
      $rossa->name_it = "Piazzetta della Croce Rossa";
      $rossa->save();

      $bigli = Street::where('name_it','=','Via Bigli')->get()->first();
      $bigli->delete();

    }
}
