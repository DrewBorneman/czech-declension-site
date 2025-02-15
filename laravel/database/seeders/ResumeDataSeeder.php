<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ResumeData;

class ResumeDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < 1; $i++) {
            ResumeData::create([
                'title' => 'title',
                'text' => 'text',
            ]);
        }
    }
}
