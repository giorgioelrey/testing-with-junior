<?php

use Illuminate\Database\Seeder;
use App\Page;

class PagesTableSeeder extends Seeder
{
  /**
  * Run the database seeds.
  *
  * @return void
  */
  public function run()
  {

    $pageChiSiamo = new Page;
    $pageChiSiamo->name = 'chi-siamo';
    $pageChiSiamo->contents = json_encode([
      'metadescription' => [
        'type' => 'string',
        'translated' => true,
        'data' => [
          'it'=> 'meta pagina chi siamo it',
          'en' => 'meta pagina chi siamo en'
        ],
      ],
      'main_image_url' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'content' => [
        'type' => 'wisiwyg',
        'translated' => true,
        'data' => [
          'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti Immagine Uomo 96 non è stata l\'unica novità della maison. Il direttore creativo Clare Waight Keller, guest designer della grande manifestazione dedicata alla moda maschile, ha annunciato anche una nuova collaborazione, svelando la liaison con Onitsuka Tiger: MEXICO 66 GDX.</p><br><p>Protagoniste due varianti del modello NIPPONMADEMEXICO 66, una total white e l\'altra declinata in nero con dettagli rossi e bianchi.</p><br><p>Per noi è un grande onore ospitare l’esordio in passerella della collezione uomo di Givenchy con la direzione</p>',
          'en' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, iure ut quis sequi assumenda sint consectetur, cumque, animi voluptatum recusandae quia laudantium, veritatis hic impedit dicta? Corrupti incidunt, laborum iusto deserunt inventore reprehenderit accusantium ex animi nihil dolorum ea odio numquam voluptatem necessitatibus id quod quisquam, laboriosam velit maiores. Laudantium?</p><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nam, blanditiis at esse quisquam explicabo officia, maiores reiciendis velit! Fuga pariatur cumque fugiat laborum nostrum maiores repellendus soluta, atque vel!</p>'
        ]
      ]
    ]);
    $pageChiSiamo->save();

    $pageMNLounge = new Page;
    $pageMNLounge->name = 'mn-vip-lounge';
    $pageMNLounge->contents = json_encode([
      'metadescription' => [
        'type' => 'string',
        'translated' => true,
        'data' => [
          'it'=> 'meta pagina mnlounge it',
          'en' => 'meta pagina mnlounge en'
        ],
      ],
      'carousel_top_image_1' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_top_image_2' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_top_image_3' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_top_image_4' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'title_top' => [
        'type' => 'string',
        'translated' => true,
        'data' => [
          'it'=> 'TITOLO TOP',
          'en' => 'TITLE TOP'
        ],
      ],
      'content_top' => [
        'type' => 'wisiwyg',
        'translated' => true,
        'data' => [
          'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti Immagine Uomo 96 non è stata l\'unica novità della maison. Il direttore creativo Clare Waight Keller, guest designer della grande manifestazione dedicata alla moda maschile, ha annunciato anche una nuova collaborazione, svelando la liaison con Onitsuka Tiger: MEXICO 66 GDX.</p><br><p>Protagoniste due varianti del modello NIPPONMADEMEXICO 66, una total white e l\'altra declinata in nero con dettagli rossi e bianchi.</p><br><p>Per noi è un grande onore ospitare l’esordio in passerella della collezione uomo di Givenchy con la direzione creativa di Clare Waight Keller” ha detto Lapo Cianchi, direttore comunicazione ed eventi speciali di Pitti Immagine. “Ci troviamo di fronte a una visione forte, moderna ed elegante.concentrarsi sulla moda maschile</p>',
          'en' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, iure ut quis sequi assumenda sint consectetur, cumque, animi voluptatum recusandae quia laudantium, veritatis hic impedit dicta? Corrupti incidunt, laborum iusto deserunt inventore reprehenderit accusantium ex animi nihil dolorum ea odio numquam voluptatem necessitatibus id quod quisquam, laboriosam velit maiores. Laudantium?</p><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nam, blanditiis at esse quisquam explicabo officia, maiores reiciendis velit! Fuga pariatur cumque fugiat laborum nostrum maiores repellendus soluta, atque vel!</p>',
        ]
      ],
      'carousel_bottom_image_1' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_bottom_image_2' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_bottom_image_3' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_bottom_image_4' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
    ]);

    $pageMNLounge->save();

    $pageContatti = new Page;
    $pageContatti->name = 'contatti';
    $pageContatti->contents = json_encode([
      'metadescription' => [
        'type' => 'string',
        'translated' => true,
        'data' => [
          'it'=> 'meta pagina contatti it',
          'en' => 'meta pagina contatti en'
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
      'address' => [
        'type' => 'string',
        'translated' => false,
        'data' => 'Via dei Billighi 26, 20100 Milano',
      ],
      'email' => [
        'type' => 'string',
        'translated' => false,
        'data' => 'segreteria@montenapoleonedistrict.it',
      ],
      'phone' => [
        'type' => 'string',
        'translated' => false,
        'data' => '02 2035445566',
      ]
    ]);
    $pageContatti->save();

    $pageVendemmia = new Page;
    $pageVendemmia->name = 'vendemmia';
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
        'data' => '',
      ],
      'carousel_image_2' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_image_2_text' => [
        'type' => 'string',
        'translated' => false,
        'data' => '',
      ],
      'carousel_image_3' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_image_3_text' => [
        'type' => 'string',
        'translated' => false,
        'data' => '',
      ],
      'image_top_url' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'title_top' => [
        'type' => 'string',
        'translated' => true,
        'data' => [
          'it'=> 'TITOLO TOP',
          'en' => 'TITLE TOP'
        ],
      ],
      'content_top' => [
        'type' => 'wisiwyg',
        'translated' => true,
        'data' => [
          'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti Immagine Uomo 96 non è stata l\'unica novità della maison. Il direttore creativo Clare Waight Keller, guest designer della grande manifestazione dedicata alla moda maschile, ha annunciato anche una nuova collaborazione, svelando la liaison con Onitsuka Tiger: MEXICO 66 GDX.</p><br><p>Protagoniste due varianti del modello NIPPONMADEMEXICO 66, una total white e l\'altra declinata in nero con dettagli rossi e bianchi.</p><br><p>Per noi è un grande onore ospitare l’esordio in passerella della collezione uomo di Givenchy con la direzione</p>',
          'en' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, iure ut quis sequi assumenda sint consectetur, cumque, animi voluptatum recusandae quia laudantium, veritatis hic impedit dicta? Corrupti incidunt, laborum iusto deserunt inventore reprehenderit accusantium ex animi nihil dolorum ea odio numquam voluptatem necessitatibus id quod quisquam, laboriosam velit maiores. Laudantium?</p><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nam, blanditiis at esse quisquam explicabo officia, maiores reiciendis velit! Fuga pariatur cumque fugiat laborum nostrum maiores repellendus soluta, atque vel!</p>'
        ]
      ],
      'image_bottom_url' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'title_bottom' => [
        'type' => 'string',
        'translated' => true,
        'data' => [
          'it'=> 'TITOLO BOTTOM',
          'en' => 'TITLE BOTTOM'
        ],
      ],
      'content_bottom' => [
        'type' => 'wisiwyg',
        'translated' => true,
        'data' => [
          'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti Immagine Uomo 96 non è stata l\'unica novità della maison. Il direttore creativo Clare Waight Keller, guest designer della grande manifestazione dedicata alla moda maschile, ha annunciato anche una nuova collaborazione, svelando la liaison con Onitsuka Tiger: MEXICO 66 GDX.</p><br><p>Protagoniste due varianti del modello NIPPONMADEMEXICO 66, una total white e l\'altra declinata in nero con dettagli rossi e bianchi.</p><br><p>Per noi è un grande onore ospitare l’esordio in passerella della collezione uomo di Givenchy con la direzione</p>',
          'en' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, iure ut quis sequi assumenda sint consectetur, cumque, animi voluptatum recusandae quia laudantium, veritatis hic impedit dicta? Corrupti incidunt, laborum iusto deserunt inventore reprehenderit accusantium ex animi nihil dolorum ea odio numquam voluptatem necessitatibus id quod quisquam, laboriosam velit maiores. Laudantium?</p><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nam, blanditiis at esse quisquam explicabo officia, maiores reiciendis velit! Fuga pariatur cumque fugiat laborum nostrum maiores repellendus soluta, atque vel!</p>'
        ]
      ]
    ]);
    $pageVendemmia->save();



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
      'carousel_image_1' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_image_1_text' => [
        'type' => 'string',
        'translated' => false,
        'data' => '',
      ],
      'carousel_image_2' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_image_2_text' => [
        'type' => 'string',
        'translated' => false,
        'data' => '',
      ],
      'carousel_image_3' => [
        'type' => 'image',
        'translated' => false,
        'data' => '',
      ],
      'carousel_image_3_text' => [
        'type' => 'string',
        'translated' => false,
        'data' => '',
      ],

    ]);
    $pageHome->save();

  }


}
