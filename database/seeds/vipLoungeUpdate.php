<?php

use Illuminate\Database\Seeder;
use App\Page;

class vipLoungeUpdate extends Seeder
{
  /**
  * Run the database seeds.
  *
  * @return void
  */
  public function run()
  {
   $pageMNLounge = Page::where('name', 'mn-vip-lounge')->get()->first();

 $MNloungeContentsNewFields =[
        'testo_form' => [
            'type' => 'wisiwyg',
            'translated' => true,
            'data' => [
              'it'=> 'form testo  mnlounge it',
              'en' => 'form testo mnlounge en'
            ],
        ],
        'content_bottom' => [
            'type' => 'wisiwyg',
            'translated' => true,
            'data' => [
              'it'=> 'bottom testo  mnlounge it',
              'en' => 'bottom testo mnlounge en'
            ],
        ]

    ];
  $pageMNLounge->contents = json_encode(array_merge((array)json_decode($pageMNLounge->contents),$MNloungeContentsNewFields));

  $pageMNLounge->be_form_layout = json_encode([
      'sections' => [
          '0' => [
            'title' => 'titolo top',
            'fields' => ['title_top__it', 'title_top__en']
        ],
          '1' => [
              'title' => 'metadescription',
              'fields' => ['metadescription__it', 'metadescription__en']
          ],
          '2' => [
              'title' => 'Riga 1 slide',
              'fields' => ['carousel_top_image_1', 'carousel_top_image_2','carousel_top_image_3','carousel_top_image_4']
          ],
          '3' => [
              'title' => 'riga 1 testo',
              'fields' => ['content_top__it','content_top__en']
          ],
          '4' => [
              'title' => 'riga 2 slide',
              'fields' => ['carousel_bottom_image_1', 'carousel_bottom_image_2','carousel_bottom_image_3','carousel_bottom_image_4']
          ],
          '5' => [
              'title' => 'riga 2 testo',
              'fields' => ['content_bottom__it','content_bottom__en']
          ],

          '6' => [
              'title' => 'testo form',
              'fields' => ['testo_form__it','testo_form__en']
          ]


      ],
  ]);

  $pageMNLounge->save();
}
}
