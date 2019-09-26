<?php

use Illuminate\Database\Seeder;
use App\Page;

class ImageLogoVendemmiaUpdate extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pageVendemmia = Page::where('name', 'vendemmia')->get()->first();

        $ImageLogoVendemmiaNewField =[
            'logo_vendemmia' => [
              'type' => 'image',
              'translated' => false,
              'data' => '',
            ]
        ];

        $pageVendemmia->contents = json_encode(array_merge((array)json_decode($pageVendemmia->contents),$ImageLogoVendemmiaNewField));

        $pageVendemmia->be_form_layout = json_encode([
            'sections' => [
                '0' => [
                    'title' => 'Meta Descriptions',
                    'fields' => ['metadescription__it', 'metadescription__en']
                ],
                '1' => [
                    'title' => 'Visibilità pagina',
                    'fields' => ['select_vendemmia']
                ],
                '2' => [
                    'title' => 'Carousel Image 1',
                    'fields' => ['carousel_image_1', 'carousel_image_1_text','carousel_image_1_link__it','carousel_image_1_link__en']
                ],
                '3' => [
                    'title' => 'Carousel Image 2',
                    'fields' => ['carousel_image_2', 'carousel_image_2_text','carousel_image_2_link__it','carousel_image_2_link__en']
                ],
                '4' => [
                    'title' => 'Carousel Image 3',
                    'fields' => ['carousel_image_3', 'carousel_image_3_text','carousel_image_3_link__it','carousel_image_3_link__en']
                ],
                '5' => [
                    'title' => 'Riga 1',
                    'fields' => ['image_riga_1_url', 'titolo_riga_1__it', 'titolo_riga_1__en','content_riga_1__it','content_riga_1__en']
                ],
                '6' => [
                    'title' => 'Riga 2',
                    'fields' => ['image_riga_2_url', 'titolo_riga_2__it', 'titolo_riga_2__en','content_riga_2__it','content_riga_2__en']
                ],
                '7' => [
                    'title' => 'Riga 3',
                    'fields' => ['image_riga_3_url', 'titolo_riga_3__it', 'titolo_riga_3__en','content_riga_3__it','content_riga_3__en']
                ],
                '8' => [
                    'title' => 'Riga 4',
                    'fields' => ['image_riga_4_url', 'titolo_riga_4__it', 'titolo_riga_4__en','content_riga_4__it','content_riga_4__en']
                ],
                '9' => [
                    'title' => 'Riga 5',
                    'fields' => ['image_riga_5_url', 'titolo_riga_5__it', 'titolo_riga_5__en','content_riga_5__it','content_riga_5__en']
                ],
                '10' => [
                    'title' => 'Riga 6',
                    'fields' => ['image_riga_6_url', 'titolo_riga_6__it', 'titolo_riga_6__en','content_riga_6__it','content_riga_6__en']
                ],
                '11' => [
                    'title' => 'Riga 7',
                    'fields' => ['image_riga_7_url', 'titolo_riga_7__it', 'titolo_riga_7__en','content_riga_7__it','content_riga_7__en']
                ],
                '12' => [
                    'title' => 'Riga 8',
                    'fields' => ['image_riga_8_url', 'titolo_riga_8__it', 'titolo_riga_8__en','content_riga_8__it','content_riga_8__en']
                ],
                '13' => [
                  'title' => 'Immagine loghi',
                  'fields' => ['logo_vendemmia']
                ],



            ],
        ]);

        $pageVendemmia->save();
    }
}
