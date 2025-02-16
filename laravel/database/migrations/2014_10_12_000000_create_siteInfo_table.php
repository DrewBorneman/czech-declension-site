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
        Schema::create('siteInfo', function (Blueprint $table) {
            $table->id();
            $table->string('Drew Borneman');
            $table->string('2025, Drew Borneman')->nullable();
            $table->string('./files/monogram.svg')->nullable();
            $table->string('f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b')->nullable(); //asdf
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siteInfo');
    }
};
