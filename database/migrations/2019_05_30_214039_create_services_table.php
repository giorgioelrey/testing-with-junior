<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->increments('id');
            //TODO: Must create a link to a category
            $table->string('name_it');
            $table->string('name_en');
            $table->string('slug_it')->nullable();
            $table->string('slug_en')->nullable();
            $table->string('shortdescription_it');
            $table->string('shortdescription_en');
            $table->text('detail_it');
            $table->text('detail_en');
            $table->smallInteger('startingprice');
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
        Schema::dropIfExists('services');
    }
}
