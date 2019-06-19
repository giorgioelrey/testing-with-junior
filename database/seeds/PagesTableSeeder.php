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
      $pageChiSiamo->content = json_encode([
        'main_image_url' => '',
        'content' => [
          'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti Immagine Uomo 96 non è stata l\'unica novità della maison. Il direttore creativo Clare Waight Keller, guest designer della grande manifestazione dedicata alla moda maschile, ha annunciato anche una nuova collaborazione, svelando la liaison con Onitsuka Tiger: MEXICO 66 GDX.</p><br><p>Protagoniste due varianti del modello NIPPONMADEMEXICO 66, una total white e l\'altra declinata in nero con dettagli rossi e bianchi.</p><br><p>Per noi è un grande onore ospitare l’esordio in passerella della collezione uomo di Givenchy con la direzione</p>',
          'en' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, iure ut quis sequi assumenda sint consectetur, cumque, animi voluptatum recusandae quia laudantium, veritatis hic impedit dicta? Corrupti incidunt, laborum iusto deserunt inventore reprehenderit accusantium ex animi nihil dolorum ea odio numquam voluptatem necessitatibus id quod quisquam, laboriosam velit maiores. Laudantium?</p><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nam, blanditiis at esse quisquam explicabo officia, maiores reiciendis velit! Fuga pariatur cumque fugiat laborum nostrum maiores repellendus soluta, atque vel!</p>'
        ]
      ]);
      $pageChiSiamo->save();

      $pageMNLounge = new Page;
      $pageMNLounge->name = 'mnlounge';
      $pageMNLounge->content = json_encode([
        'main_image_url' => '',
        'content' => [
          'it' => '<p>Il debutto della collezione Uomo di Givenchy nella cornice di Pitti Immagine Uomo 96 non è stata l\'unica novità della maison. Il direttore creativo Clare Waight Keller, guest designer della grande manifestazione dedicata alla moda maschile, ha annunciato anche una nuova collaborazione, svelando la liaison con Onitsuka Tiger: MEXICO 66 GDX.</p><br><p>Protagoniste due varianti del modello NIPPONMADEMEXICO 66, una total white e l\'altra declinata in nero con dettagli rossi e bianchi.</p><br><p>Per noi è un grande onore ospitare l’esordio in passerella della collezione uomo di Givenchy con la direzione creativa di Clare Waight Keller” ha detto Lapo Cianchi, direttore comunicazione ed eventi speciali di Pitti Immagine. “Ci troviamo di fronte a una visione forte, moderna ed elegante.concentrarsi sulla moda maschile</p>',
          'en' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, iure ut quis sequi assumenda sint consectetur, cumque, animi voluptatum recusandae quia laudantium, veritatis hic impedit dicta? Corrupti incidunt, laborum iusto deserunt inventore reprehenderit accusantium ex animi nihil dolorum ea odio numquam voluptatem necessitatibus id quod quisquam, laboriosam velit maiores. Laudantium?</p><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nam, blanditiis at esse quisquam explicabo officia, maiores reiciendis velit! Fuga pariatur cumque fugiat laborum nostrum maiores repellendus soluta, atque vel!</p>',
          'content' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, iure ut quis sequi assumenda sint consectetur, cumque, animi voluptatum recusandae quia laudantium, veritatis hic impedit dicta? Corrupti incidunt, laborum iusto deserunt inventore reprehenderit accusantium ex animi nihil dolorum ea odio numquam voluptatem necessitatibus id quod quisquam, laboriosam velit maiores. Laudantium?</p><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nam, blanditiis at esse quisquam explicabo officia, maiores reiciendis velit! Fuga pariatur cumque fugiat laborum nostrum maiores repellendus soluta, atque vel!</p>'
        ]
      ]);
      
      $pageMNLounge->save();

      $pageContatti = new Page;
      $pageContatti = json_encode([
        'image_top_url' => '',
        'image_bottom_url' => '',
        'address' => 'Via dei Billighi 26, 20100 Milano',
        'email' => 'segreteria@montenapoleonedistrict.it',
        'phone' => '02 2035445566',
      ]);
      $pageContatti->save();

    }
}
