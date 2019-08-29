<?php

use App\Page;
use Illuminate\Database\Seeder;

class PageBrandTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pageBrand = new Page;
        $pageBrand->name = 'brand';
        $pageBrand->contents = json_encode([
            'metadescription' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'meta pagina Brand it',
                    'en' => 'meta pagina Brand en'
                ],
            ],
            'image_top_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'image_bottom_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],

        ]);
        $pageBrand->save();
    }
}
