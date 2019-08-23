<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeEventsTableWithDateRange extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('events', function (Blueprint $table) {

            $table->renameColumn('date', 'start_date');
            $table->renameColumn('time', 'start_time');


        });

        Schema::table('events', function (Blueprint $table) {

            $table->date('end_date')->after('start_time');
            $table->dateTime('end_time')->after('end_date');

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
            $table->renameColumn('start_date', 'date');
            $table->renameColumn('start_time', 'time');
            $table->dropColumn('end_date');
            $table->dropColumn('end_time');
        });
    }
}
