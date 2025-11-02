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
            $table->json('S1');
            $table->json('P1');
            $table->json('S2');
            $table->json('P2');
            $table->json('S3');
            $table->json('P3');
            $table->json('S4');
            $table->json('P4');
            $table->json('S5');
            $table->json('P5');
            $table->json('S6');
            $table->json('P6');
            $table->json('S7');
            $table->json('P7');
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
