<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddBodyTopBottomEnItToEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->renameColumn('description_it', 'bodytop_it');
            $table->renameColumn('description_en', 'bodytop_en');
        });

        Schema::table('events', function (Blueprint $table) {
            $table->text('bodybottom_it')->after('bodytop_it');
            $table->text('bodybottom_en')->after('bodytop_en');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('events', function (Blueprint $table) {

            $table->renameColumn('bodytop_it', 'description_it');
            $table->renameColumn('bodytop_en', 'description_en');
            $table->dropColumn(['bodybottom_it','bodybottom_en']);
        });
    }
}
