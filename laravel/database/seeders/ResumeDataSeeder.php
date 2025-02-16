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
        ResumeData::create([
            'title' => 'Resume',
            'text' => 'Here you can download my resume in the following formats:',
        ]);
    }
}
