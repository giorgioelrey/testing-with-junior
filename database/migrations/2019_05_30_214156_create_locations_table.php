<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name_it');
            $table->string('name_en');
            $table->string('slug_it')->nullable();
            $table->string('slug_en')->nullable();
            $table->string('address');
            $table->decimal('latitude', 10,8);
            $table->decimal('longitude', 11, 8);
            $table->string('phonenumber');
            $table->string('email');
            $table->text('description_it');
            $table->text('description_en');
            $table->string('thumbnail')->nullable();
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
        Schema::dropIfExists('locations');
    }
}
