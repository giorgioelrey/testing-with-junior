<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('title_it');
            $table->string('title_en');
            $table->string('slug_it')->nullable();
            $table->string('slug_en')->nullable();
            $table->string('address');
            $table->text('description_it');
            $table->text('description_en');
            $table->string('image_url')->nullable();
            $table->date('date');
            $table->dateTime('time');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
