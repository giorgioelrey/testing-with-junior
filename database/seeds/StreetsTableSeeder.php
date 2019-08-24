<?php

use Illuminate\Database\Seeder;
use App\Street;

class StreetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $montenapoleone = new Street();
        $montenapoleone->name_it = 'Via Monte Napoleone';
        $montenapoleone->save();

        $verri = new Street();
        $verri->name_it = 'Via Verri';
        $verri->save();

        $santandrea = new Street();
        $santandrea->name_it = "Via Sant'Andrea";
        $santandrea->save();

        $gesu = new Street();
        $gesu->name_it = "Via del Gesù";
        $gesu->save();

        $bagutta = new Street();
        $bagutta->name_it = "Via Bagutta";
        $bagutta->save();

        $santospirito = new Street();
        $santospirito->name_it = "Via Santo Spirito";
        $santospirito->save();

        $borgospesso = new Street();
        $borgospesso->name_it = "Via Borgospesso";
        $borgospesso->save();

        $bigli = new Street();
        $bigli->name_it = "Via Bigli";
        $bigli->save();
  /*
        $alessandroManzoni = new Street();
        $alessandroManzoni->name_it = "Via Alessandro Manzoni";
        $alessandroManzoni->save();

        $senato = new Street();
        $senato->name_it = "Via Senato";
        $senato->save();

        $fratelliGabba = new Street();
        $fratelliGabba->name_it = "Via Fratelli Gabba";
        $fratelliGabba->save();

*/

    }
}
