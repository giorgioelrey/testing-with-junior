<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('metadescription_it');
            $table->string('metadescription_en');
            $table->string('title_it');
            $table->string('title_en');
            $table->string('slug_it')->nullable();
            $table->string('slug_en')->nullable();
            $table->text('postbodytop_it');
            $table->text('postbodytop_en');
            $table->text('postbodybottom_it');
            $table->text('postbodybottom_en');
            $table->date('date')->nullable();
            $table->string('image_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
