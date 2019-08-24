<?php

use Illuminate\Database\Seeder;
use App\Location;
use Faker\Generator as Faker;
use Faker\Factory as FakerFactory;

class LocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $armaniHotel = new Location;
        $armaniHotel->name_it = 'ARMANI HOTEL MILANO';
        $armaniHotel->name_en = 'ARMANI HOTEL MILANO';
        $armaniHotel->address = 'Via Alessandro Manzoni, 31, 20121 Milano, Italia';
        $armaniHotel->latitude = '45.4705667';
        $armaniHotel->longitude = '9.1930102';
        $armaniHotel->phonenumber = '+39 02 8883 8888';
        $armaniHotel->email = 'armanihotel@test.com';
        $armaniHotel->description_it = "Situato nell’edificio Razionalista di via Manzoni 31, l'Armani Hotel Milano sorge nel cuore del Quadrilatero della Moda, a pochi passi da Piazza del Duomo e dal Teatro Alla Scala. Ogni dettaglio delle 95 camere e suite è stato disegnato personalmente da Giorgio Armani ed è stato scelto per le sue qualità estetiche e scultoree, offrendo un'esperienza di comfort ‘home-away-from-home’. In linea con la filosofia 'Stay with Armani', un Lifestyle Manager si prenderà cura delle esigenze degli ospiti durante tutto il loro soggiorno. Al 7 ° piano, l'Armani/Ristorante e l'Armani/Bamboo Bar sono due location raffinate ed eleganti con vista panoramica sullo skyline della città. L'Armani/Ristorante offre una raffinata cucina gourmet italiana e una vasta Enoteca. L'Armani/Bamboo Bar, con il soffitto a doppia altezza e gli elementi in onice retroilluminati è il luogo ideale per un pranzo informale, un aperitivo o un drink after dinner. Al piano superiore l’Armani/SPA copre 1.000 mq di bellezza e tranquillità e dispone di 6 cabine per trattamenti, una Couple Suite, sauna finlandese, bagno di vapore, relaxation pool e centro fitness aperto 24h al giorno. Infine l’Armani/Business Centre è attrezzato con le ultime tecnologie video e audio, per soddisfare qualsiasi esigenza aziendale. Lusso, pace e raffinata bellezza qui nascono dal più puro stile Armani, dando all'idea di comfort e ospitalità un’estetica nuova.";
        $armaniHotel->description_en = "Located in the rationalist Manzoni 31 palazzo, the Armani Hotel Milano stands at the heart of the world-famous fashion district, near Piazza del Duomo and Teatro Alla Scala.  Personally designed by Giorgio Armani, the Hotel reflects his concept of comfort and hospitality. Every detail of the 95 Guestrooms and Suites has been chosen for its sculptural and aesthetic qualities, delivering a home-away-from-home experience. In line with the ‘Stay with Armani’ philosophy, a Lifestyle Manager will take care of guests’ needs throughout their whole stay.    On the 7th floor the Armani/Ristorante and the Armani/Bamboo Bar are two refined and elegant locations overlooking the city’s skyline. The Armani/Ristorante offers refined Italian gourmet cuisine and a wide Enoteca. The Armani/Bamboo Bar with its louvered window, double volume ceiling and backlit onyx elements is the perfect place for an informal lunch, an aperitivo or a late drink.   On the top floor the Armani/SPA, with its glass walls and ceiling, covers 1.000sm of beauty and peace and features 6 treatment rooms, a Couple Suite, Finnish sauna, steam bath, a relaxation pool and a 24/h fitness centre.  Finally, the Armani/Business Centre is fully equipped with state-of-the-art communication and audio/visual devices, for any corporate need.   Luxury, peace, and sophisticated beauty sprout from the purest Armani style, giving the idea of hospitality a new aesthetics.";
        $armaniHotel->image_url = 'https://www.montenapoleone.luxury/content/dam/montenapoleone/images/Hotels/Armani_Hotel_Milano.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg';
        $armaniHotel->category_id = 3;
        $armaniHotel->street_id = 9;
        $armaniHotel->save();

        $baglioniHotel = new Location;
        $baglioniHotel->name_it = 'BAGLIONI HOTEL CARLTON';
        $baglioniHotel->name_en = 'BAGLIONI HOTEL CARLTON';
        $baglioniHotel->address = 'Via Senato,5 20121 Milano, Italia';
        $baglioniHotel->latitude = '45.4692053';
        $baglioniHotel->longitude = '9.1984661';
        $baglioniHotel->phonenumber = '+39 02 77077473';
        $baglioniHotel->email = 'baglionihotel@test.com';
        $baglioniHotel->description_it = "Quando la moda non passa di moda, diventa stile.
Il Baglioni Hotel Carlton è un raffinato hotel 5 stelle, perfetto per viaggi di affari o di piacere a Milano. Si trova in una posizione privilegiata, al crocevia tra cultura, moda e design: si affaccia su Via della Spiga, la più celebre via dello shopping. Nelle vicinanze, Via Montenapoleone, il Duomo e il Teatro alla Scala. Direttamente in hotel, Il Baretto al Baglioni, uno dei ristoranti più famosi della città, ritrovo preferito dal jet set italiano e internazionale, e il Caffé Baglioni, luogo di sosta rinomato per chi lavora a Milano, ideale per appuntamenti importanti.

";
        $baglioniHotel->description_en = "When fashion doesn’t go out of fashion, it becomes style.
The Baglioni Hotel Carlton is a 5 star hotel in Milan, Italy perfect for both leisure and business trips. It is situated in the heart of Milan, at the crossroads of culture, fashion and design, in a highly prestigious position: it directly overlooks Via della Spiga, the most celebrated shopping street in the city. Via Montenapoleone, the cathedral and the famous La Scala theatre are situated a short distance away.The Baretto al Baglioni is one of the most famous restaurants in Milan and the perfect meeting place for the Italian and international Jet Set. A renowned place of refreshment for those working in Milan, Caffé Baglioni, is ideal for small work meetings and major encounters.";
        $baglioniHotel->image_url = 'https://www.montenapoleone.luxury/content/dam/montenapoleone/images/Hotels/Terrace_Suite_Baglioni_Hotel_Carlton.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg';
        $baglioniHotel->category_id = 3;
        $baglioniHotel->street_id = 10;
        $baglioniHotel->save();

        $baglioniHotel = new Location;
        $baglioniHotel->name_it = 'BULGARI HOTEL MILANO';
        $baglioniHotel->name_en = 'BULGARI HOTEL MILANO';
        $baglioniHotel->address = 'Via Fratelli Gabba, 7/B 20121 Milano, Italia';
        $baglioniHotel->latitude = '45.4700904';
        $baglioniHotel->longitude = '9.1892977';
        $baglioniHotel->phonenumber = '+39 02 8055801';
        $baglioniHotel->email = 'bulgarihotel@test.com';
        $baglioniHotel->description_it = "In una strada privata tra Via Montenapoleone, Via della Spiga, la Scala e l'Accademia di Brera, un palazzo milanese risalente al 18 ° secolo e rinnovato con gusto accoglie il Bulgari Hotel di Milano, nel cuore commerciale e culturale di una città che, dietro la sua austera facciata, nasconde cortili deliziosi ed inaspettati spazi verdi. Ne è un esempio il giardino privato di 4.000 metri quadrati, una naturale estensione del vicino Giardino botanico, un'oasi rigenerante di serenità e relax nel ritmo frenetico di Milano.";
        $baglioniHotel->description_en = "On a private street between Via Montenapoleone, Via della Spiga, La Scala and the Accademia di Brera, in a tastefully renovated 18th-century Milanese palazzo is the Bulgari Hotel Milan, situated in the cultural and commercial heart of a city that, behind its austere façades, hides delightful and unexpected courtyards and green spaces. One such space is the Bulgari Hotel’s 4,000-square-meter private garden, a natural extension of the nearby Botanical Garden, a restorative oasis of serenity and relaxation in the midst of Milan’s busy pace.";
        $baglioniHotel->image_url = 'https://www.montenapoleone.luxury/content/dam/montenapoleone/images/Hotels/Bulgari_Hotel_Milano.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg';
        $baglioniHotel->category_id = 3;
        $baglioniHotel->street_id = 11;
        $baglioniHotel->save();


        $zegnaBoutique = new Location;
        $zegnaBoutique->name_it = 'ERMENEGILDO ZEGNA';
        $zegnaBoutique->name_en = 'ERMENEGILDO ZEGNA';
        $zegnaBoutique->address = 'Via Monte Napoleone, 27/E, 20121, Milano, Italia';
        $zegnaBoutique->latitude = '45.4698447';
        $zegnaBoutique->longitude = '9.1930184';
        $zegnaBoutique->phonenumber = '+39 02 76006437';
        $zegnaBoutique->email = 'baglionihotel@test.com';
        $zegnaBoutique->description_it = "La facciata dell’edificio che ospita lo Spazio Zegna risale all’800 ed è al centro del famoso ‘quadrilatero della moda’ di Milano. Al Global Store, disposto su quattro piani e su una superficie di 700 metri quadri, si accede da un salone che si sviluppa in doppia altezza, per arrivare poi ad una grande immagine dell’Oasi Zegna, caratterizzata da colori in successione, che ricordano il mutare delle stagioni in prossimità del Monte Rosa, rimandando al visitatore la bellezza di quella natura e testimoniando l’impegno per la tutela ambientale che contraddistingue da sempre Zegna. Questo legame con la natura è il leit motive del negozio, che si concretizza nella scelta dei colori maschili e nei diversi materiali utilizzati.
Entrando da via Monte Napoleone, i materiali (marmo, pietre grigie, legni pregiati e moderni metalli), che qualificano il piano terra, creano una sofisticata atmosfera di benvenuto, resa ancor più accattivante dalla presenza degli accessori in pelle, degli occhiali e dei profumi. Un’opera di Francesco Jodice incornicia lo spazio del mezzanino. Scale in legno conducono, poi, al primo piano che ospita le lussuose collezioni d’abbigliamento sartoriale Ermenegildo Zegna. L’area dedicata al Su Misura, dove è possibile scegliere abiti sartoriali e accessori in pelle, completa l’attenzione alla personalizzazione dell’uomo Zegna. Questo piano è decorato con una boiserie in zebrano, che richiama la tradizione sartoriale italiana ed il lusso del fatto a mano. Sopra il camino in marmo verde risalta un’opera di Mimmo Jodice  che raffigura l’Oasi Zegna.";
        $zegnaBoutique->description_en = "The façade of the building hosting Spazio Zegna dates back to the 19th century and is located at the centre of the famous “quadrilatero della moda” in Milan. The Global Store is arranged on four floors and covers an overall surface of 700 sqm. The entrance goes through a double-height hall, followed by a large picture of Oasi Zegna, featuring alternating colours recalling the changing of the seasons near the Monte Rosa. The picture refers to the beauty of those natural landscapes and confirms Zegna’s long-standing commitment to the protection of the environment, which is the leitmotiv of the store and is expressed in the selection of manly colours and of the materials used.";
        $zegnaBoutique->image_url = 'https://www.montenapoleone.luxury/content/dam/montenapoleone/images/boutique/Ermenegildo_Zegna_Btq_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg';
        $zegnaBoutique->category_id = 4;
        $zegnaBoutique->street_id = 1;
        $zegnaBoutique->save();


        $balenciagaBoutique = new Location;
        $balenciagaBoutique->name_it = 'BALENCIAGA';
        $balenciagaBoutique->name_en = 'BALENCIAGA';
        $balenciagaBoutique->address = 'Via Santo Spirito, 19, 20121 Milano, Italia';
        $balenciagaBoutique->latitude = '45.4697213';
        $balenciagaBoutique->longitude = '9.1942936';
        $balenciagaBoutique->phonenumber = '+39 02 760841';
        $balenciagaBoutique->email = 'balenciagaboutique@test.com';
        $balenciagaBoutique->description_it = "La Maison Balenciaga, da sempre immagine di haute couture, si pone, nello scenario moda, all'avanguardia per la ricerca di materiali e modelli. La Boutique è situata in Via Santo Spirito all'interno di un palazzo borghese milanese dove la modernità si fonde con la tradizione.";
        $balenciagaBoutique->description_en = "The Balenciaga House, image of Haute Couture, in the fashion worldwide scenario, is avant-garde for the research of materials and models. The Boutique is located in Via Santo Spirito inside a Milanese bourgeois palace where the modernity merge with the tradition.";
        $balenciagaBoutique->image_url = 'https://www.montenapoleone.luxury/content/dam/montenapoleone/images/boutique/BALENCIAGA_BTQ.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg';
        $balenciagaBoutique->category_id = 4;
        $balenciagaBoutique->street_id = 6;
        $balenciagaBoutique->save();


        $valentinoBoutique = new Location;
        $valentinoBoutique->name_it = 'VALENTINO';
        $valentinoBoutique->name_en = 'VALENTINO';
        $valentinoBoutique->address = 'Via Monte Napoleone, 20, 20121 Milan, Italy';
        $valentinoBoutique->latitude = '45.4695741';
        $valentinoBoutique->longitude = '9.1936865';
        $valentinoBoutique->phonenumber = '+39 02 76006182';
        $valentinoBoutique->email = 'baglionihotel@test.com';
        $valentinoBoutique->description_it = "Nel febbraio del 2012, Maria Grazia Chiuri e Pierpaolo Piccioli hanno presentato il loro primo store concept all’interno della boutique Valentino a Milano, frutto di una collaborazione durata tre anni con il famoso architetto britannico David Chipperfield.
Lo store si divide in più ambienti, ciascuno dei quali è caratterizzato da un elemento iconico del linguaggio Valentino: un mosaico verticale di specchi nell’area dedicata alle scarpe o le scaffalature in noce americano per gli accessori ricordano la biblioteca di un gentleman; la pelle grigia dei salottini di prova rende lo spazio più accogliente e personale; il gesso bianco delle pareti; il parquet; il marmo terrazzo su pavimenti e cornici.
In contrasto con la solidità degli elementi architettonici, la collezione è ospitata da sottili stand e scaffali in fibra di carbonio lucida che seguono tutto il perimetro. Questi espositori incorporano le luci a LED, che permettono di illuminarli singolarmente e in modo quasi invisibile. Il sistema di illuminazione dall’alto riflette la varietà di finiture e spazi, accostando una luce diffusa nascosta e luci bianche ai lati delle sale con una luce calda o lampadari decorati al centro. L’interpretazione dello spazio e la sequenza degli ambienti concepite da David Chipperfield trasmettono uno stato d’animo solenne e intimo che di rado si trova in una boutique classica.";
        $valentinoBoutique->description_en = "In February 2012, Maria Grazia Chiuri and Pierpaolo Piccioli presented their first store concept in Valentino’s boutique in Milan, stemming from a three-year collaboration with famous British architect David Chipperfield.
The store is divided into different areas, each one featuring an iconic element of Valentino’s essence: a vertical mosaic of mirrors in the shoe area; shelves in American hickory for accessories, recalling a gentleman’s library; grey leather in fitting rooms, which makes them cosier and more private; walls covered in white plasterboard; parquet flooring; floors and frames in terrazzo marble.
As opposed to the solidity of architectural elements, the collection is shown on subtle displays and shelves in shiny carbon fibres contouring the whole perimeter. The displays are equipped with LED lights, enabling an almost invisible lighting. The lighting system from above mirrors the variety of finishes and spaces, combining hidden diffused light and side white lights in the halls with warm lights and decorated chandeliers at the centre. The interpretation of space and the series of rooms designed by David Chipperfield convey a solemn and intimate feeling, rarely found in a classic boutique.";
        $valentinoBoutique->image_url = 'https://www.montenapoleone.luxury/content/dam/montenapoleone/images/boutique/Valentino_Btq_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg';
        $valentinoBoutique->category_id = 3;
        $valentinoBoutique->street_id = 1;
        $valentinoBoutique->save();

    }
}
