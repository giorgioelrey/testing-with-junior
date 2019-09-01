<?php

use Illuminate\Database\Seeder;
use App\Page;

class PageHomeWithVideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pageHome = new Page;
        $pageHome->name = 'home';
        $pageHome->contents = json_encode([
            'metadescription' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'meta pagina chi siamo it',
                    'en' => 'meta pagina chi siamo en'
                ],
            ],
            'youtube_video_link' => [
                'type' => 'string',
                'translated' => false,
                'data' => '',
            ],'carousel_image_1' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'carousel_image_1_text' => [
                'type' => 'string',
                'translated' => false,
                'data' => 'Have You Ever Experienced Luxury?',
            ],
            'carousel_image_2' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'carousel_image_2_text' => [
                'type' => 'string',
                'translated' => false,
                'data' => 'Have You Ever Experienced Luxury?',
            ],
            'carousel_image_3' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'carousel_image_3_text' => [
                'type' => 'string',
                'translated' => false,
                'data' => 'Have You Ever Experienced Luxury?',
            ],

        ]);
        $pageHome->save();
    }
}
