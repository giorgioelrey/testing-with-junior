<?php

namespace App\QuillEditorHelper;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;
define( 'MAX_FILE_SIZE', 2000000 );
use Sunra\PhpSimple\HtmlDomParser;

class QuillEditorHelper
{

    public function updateImagesForFieldAndSaveChangedOnesStoringValidUrlAndReturnField($formField, $storedField){

        $storedFieldHtml = HtmlDomParser::str_get_html($storedField);
        $formFieldHtml = HtmlDomParser::str_get_html($formField);

        //CHECK IMAGES TO DELETE
        foreach ($storedFieldHtml->find('img') as $storedElement) {
            //if storedImageUrl is not found in new data
            if (strpos($formField, $storedElement->src) === false) {
                $this->deleteStoredImageFromSrcPath($storedElement->src);
            }
        }

        //CHECK IMAGES TO INSERT
        foreach ($formFieldHtml->find('img') as $newDataElement) {
            //if in new data url  is not found in stored field means image is new
            if (strpos($storedField, $newDataElement->src) === false) {

                $image = $this->extractDataFromBase64Src($newDataElement->src);

                $savedImageSrcPath = $this->saveBase64ImageAndReturnStoredPath($image);

                $formField = str_replace($newDataElement->src, $savedImageSrcPath, $formField);
            }
        }

        return $formField;

    }

    public function convertAndStoreBase64ImagesFromFieldAndReturnFieldWithReadableImageUrls($field){

        $html = HtmlDomParser::str_get_html($field);

        foreach ($html->find('img') as $element) {

            $image = $this->extractDataFromBase64Src($element->src);

            $savedImageSrcPath = $this->saveBase64ImageAndReturnStoredPath($image);

            $field = str_replace($element->src, $savedImageSrcPath, $field);

        }

        return $field;
    }

    public function extractDataFromBase64Src($src){

        $image = str_replace('data:image/png;base64,', '', $src);
        $image = str_replace(' ', '+', $image);

        return $image;
    }

    public function deleteAllImagesForField($field){

        $html = HtmlDomParser::str_get_html($field);

        foreach ($html->find('img') as $element) {

            $this->deleteStoredImageFromSrcPath($element->src);
        }

    }

    public function deleteStoredImageFromSrcPath($HTMLDomParserelementSrc)
    {
        $fileUrl = 'public/' . str_replace("/storage/", '', $HTMLDomParserelementSrc);
        Storage::delete($fileUrl);
    }

    public function saveBase64ImageAndReturnStoredPath($base64Image){

        $png_url = "base64-".rand(1,900).time();

        $savePath =  storage_path().'/app/public/' . $png_url . '.png';

        $srcPath = Storage::url($png_url . '.png');

        Image::make($base64Image)->save($savePath, 80, 'png');

        return $srcPath;

    }

}
