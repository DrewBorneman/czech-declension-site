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
        Schema::create('Sentence', function (Blueprint $table) {
            $table->id();
            $table->string('lemma');
            $table->text('sentenceWithoutWord');
            $table->text('sentenceWithWord');
            $table->text('sentenceTranslation');
            $table->string('correctAnswer');
            $table->text('wordTranslation');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Sentence');
    }
};
