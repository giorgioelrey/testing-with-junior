<?php

use Illuminate\Database\Seeder;
use App\Page;

class PagesUpdateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pageVendemmia = Page::where('name', 'vendemmia')->get()->first();

        $pageVendemmia->contents = json_encode([
            'metadescription' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'meta pagina vendemmia it',
                    'en' => 'meta paginavendemmia en'
                ],
            ],
            'carousel_image_1' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'carousel_image_1_text' => [
                'type' => 'string',
                'translated' => false,
                'data' => 'Have you ever experienced luxury',
            ],
            'carousel_image_1_link' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'link 1 it',
                    'en' => 'link 1 en'
                ],
            ],
            'carousel_image_2' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'carousel_image_2_text' => [
                'type' => 'string',
                'translated' => false,
                'data' => 'Have you ever experienced luxury',
            ],
            'carousel_image_2_link' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'link 2 it',
                    'en' => 'link 2 en'
                ],
            ],
            'carousel_image_3' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'carousel_image_3_text' => [
                'type' => 'string',
                'translated' => false,
                'data' => 'Have you ever experienced luxury',
            ],
            'carousel_image_3_link' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'link 3 it',
                    'en' => 'link 3 en'
                ],
            ],
            'image_riga_1_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'titolo_riga_1' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'TITOLO Riga 1 IT',
                    'en' => 'TITLE ROW 1 EN'
                ],
            ],
            'content_riga_1' => [
                'type' => 'wisiwyg',
                'translated' => true,
                'data' => [
                    'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>',
                    'en' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>'
                ]
            ],
            'image_riga_2_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'titolo_riga_2' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'TITOLO Riga 2 IT',
                    'en' => 'TITLE ROW 2 EN'
                ],
            ],
            'content_riga_2' => [
                'type' => 'wisiwyg',
                'translated' => true,
                'data' => [
                    'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>',
                    'en' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>'
                ]
            ],
            'image_riga_3_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'titolo_riga_3' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'TITOLO Riga 3 IT',
                    'en' => 'TITLE ROW 3 EN'
                ],
            ],
            'content_riga_3' => [
                'type' => 'wisiwyg',
                'translated' => true,
                'data' => [
                    'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>',
                    'en' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>'
                ]
            ],
            'image_riga_4_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'titolo_riga_4' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'TITOLO Riga 4 IT',
                    'en' => 'TITLE ROW 4 EN'
                ],
            ],
            'content_riga_4' => [
                'type' => 'wisiwyg',
                'translated' => true,
                'data' => [
                    'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>',
                    'en' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>'
                ]
            ],
            'image_riga_5_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'titolo_riga_5' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'TITOLO Riga 5 IT',
                    'en' => 'TITLE ROW 5 EN'
                ],
            ],
            'content_riga_5' => [
                'type' => 'wisiwyg',
                'translated' => true,
                'data' => [
                    'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>',
                    'en' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>'
                ]
            ],
            'image_riga_6_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'titolo_riga_6' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'TITOLO Riga 6 IT',
                    'en' => 'TITLE ROW 6 EN'
                ],
            ],
            'content_riga_6' => [
                'type' => 'wisiwyg',
                'translated' => true,
                'data' => [
                    'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>',
                    'en' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>'
                ]
            ],
            'image_riga_7_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'titolo_riga_7' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'TITOLO Riga 7 IT',
                    'en' => 'TITLE ROW 7 EN'
                ],
            ],
            'content_riga_7' => [
                'type' => 'wisiwyg',
                'translated' => true,
                'data' => [
                    'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>',
                    'en' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>'
                ]
            ],
            'image_riga_8_url' => [
                'type' => 'image',
                'translated' => false,
                'data' => '',
            ],
            'titolo_riga_8' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'TITOLO Riga 8 IT',
                    'en' => 'TITLE ROW 8 EN'
                ],
            ],
            'content_riga_8' => [
                'type' => 'wisiwyg',
                'translated' => true,
                'data' => [
                    'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>',
                    'en' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti</p>'
                ]
            ],

        ]);

        $pageVendemmiaContentsNewFields =[

        ];

        $pageVendemmia->be_form_layout = json_encode([
            'sections' => [
                '0' => [
                    'title' => 'Meta Descriptions',
                    'fields' => ['metadescription__it', 'metadescription__en']
                ],
                '1' => [
                    'title' => 'Carousel Image 1',
                    'fields' => ['carousel_image_1', 'carousel_image_1_text','carousel_image_1_link__it','carousel_image_1_link__en']
                ],
                '2' => [
                    'title' => 'Carousel Image 2',
                    'fields' => ['carousel_image_2', 'carousel_image_2_text','carousel_image_2_link__it','carousel_image_2_link__en']
                ],
                '3' => [
                    'title' => 'Carousel Image 3',
                    'fields' => ['carousel_image_3', 'carousel_image_3_text','carousel_image_3_link__it','carousel_image_3_link__en']
                ],
                '4' => [
                    'title' => 'Riga 1',
                    'fields' => ['image_riga_1_url', 'titolo_riga_1__it', 'titolo_riga_1__en','content_riga_1__it','content_riga_1__en']
                 ],
                '5' => [
                    'title' => 'Riga 2',
                    'fields' => ['image_riga_2_url', 'titolo_riga_2__it', 'titolo_riga_2__en','content_riga_2__it','content_riga_2__en']
                 ],
                '6' => [
                    'title' => 'Riga 3',
                    'fields' => ['image_riga_3_url', 'titolo_riga_3__it', 'titolo_riga_3__en','content_riga_3__it','content_riga_3__en']
                 ],
                '7' => [
                    'title' => 'Riga 4',
                    'fields' => ['image_riga_4_url', 'titolo_riga_4__it', 'titolo_riga_4__en','content_riga_4__it','content_riga_4__en']
                 ],
                '8' => [
                    'title' => 'Riga 5',
                    'fields' => ['image_riga_5_url', 'titolo_riga_5__it', 'titolo_riga_5__en','content_riga_5__it','content_riga_5__en']
                 ],
                '9' => [
                    'title' => 'Riga 6',
                    'fields' => ['image_riga_6_url', 'titolo_riga_6__it', 'titolo_riga_6__en','content_riga_6__it','content_riga_6__en']
                 ],
                '10' => [
                    'title' => 'Riga 7',
                    'fields' => ['image_riga_7_url', 'titolo_riga_7__it', 'titolo_riga_7__en','content_riga_7__it','content_riga_7__en']
                 ],
                '11' => [
                    'title' => 'Riga 8',
                    'fields' => ['image_riga_8_url', 'titolo_riga_8__it', 'titolo_riga_8__en','content_riga_8__it','content_riga_8__en']
                 ],
            ],
        ]);

        $pageVendemmia->save();

        $pageHome = Page::where('name', 'home')->get()->first();

        $pageHomeContentsNewFields =[
            'carousel_image_1_link' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'link 1 it',
                    'en' => 'link 1 en'
                ],
            ],
            'carousel_image_2_link' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'link 2 it',
                    'en' => 'link 2 en'
                ],
            ],
            'carousel_image_3_link' => [
                'type' => 'string',
                'translated' => true,
                'data' => [
                    'it'=> 'link 3 it',
                    'en' => 'link 3 en'
                ],
            ],
        ];

        $pageHome->contents = json_encode(array_merge((array)json_decode($pageHome->contents),$pageHomeContentsNewFields));

        $pageHome->be_form_layout = json_encode([
            'sections' => [
                '0' => [
                    'title' => 'Meta Descriptions',
                    'fields' => ['metadescription__it', 'metadescription__en']
                ],
                '1' => [
                    'title' => 'Carousel Image 1',
                    'fields' => ['carousel_image_1', 'carousel_image_1_text','carousel_image_1_link__it','carousel_image_1_link__en']
                ],
                '2' => [
                    'title' => 'Carousel Image 2',
                    'fields' => ['carousel_image_2', 'carousel_image_2_text','carousel_image_2_link__it','carousel_image_2_link__en']
                ],
                '3' => [
                    'title' => 'Carousel Image 3',
                    'fields' => ['carousel_image_3', 'carousel_image_3_text','carousel_image_3_link__it','carousel_image_3_link__en']
                ],
        ]
    ]);

        $pageHome->save();

    }
}
