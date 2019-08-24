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
        $montenapoleone->name = 'Via Monte Napoleone';
        $montenapoleone->save();

        $verri = new Street();
        $verri->name = 'Via Verri';
        $verri->save();

        $santandrea = new Street();
        $santandrea->name = "Via Sant'Andrea";
        $santandrea->save();

        $gesu = new Street();
        $gesu->name = "Via del Gesù";
        $gesu->save();

        $bagutta = new Street();
        $bagutta->name = "Via Bagutta";
        $bagutta->save();

        $santospirito = new Street();
        $santospirito->name = "Via Santo Spirito";
        $santospirito->save();

        $borgospesso = new Street();
        $borgospesso->name = "Via Borgospesso";
        $borgospesso->save();

        $bigli = new Street();
        $bigli->name = "Via Bigli";
        $bigli->save();


        /*
        $alessandroManzoni = new Street();
        $alessandroManzoni->name = "Via Alessandro Manzoni";
        $alessandroManzoni->save();

        $senato = new Street();
        $senato->name = "Via Senato";
        $senato->save();

        $fratelliGabba = new Street();
        $fratelliGabba->name = "Via Fratelli Gabba";
        $fratelliGabba->save();
        */


    }
}
