<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Word', function (Blueprint $table) {
            $table->id();
            $table->string('lemma');
            $table->integer("rank");
            $table->string('1S');
            $table->string('1P');
            $table->string('2S');
            $table->string('2P');
            $table->string('3S');
            $table->string('3P');
            $table->string('4S');
            $table->string('4P');
            $table->string('5S');
            $table->string('5P');
            $table->string('6S');
            $table->string('6P');
            $table->string('7S');
            $table->string('7P');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Word');
    }
};
