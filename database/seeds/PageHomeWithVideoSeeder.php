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
        $pageHome = Page::where('name', 'home')->get()->first();

        $pageHomeContentsNewFields =[
            'youtube_video_link' => [
                'type' => 'string',
                'translated' => false,
                'data' => '73NvZaznyg8',
            ]
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
                '4' => [
                    'title' => 'Link Youtube',
                    'fields' => ['youtube_video_link']
                ]
            ],
        ]);

        $pageHome->save();
    }
}
