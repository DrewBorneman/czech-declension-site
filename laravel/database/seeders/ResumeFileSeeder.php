<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ResumeFile;

class ResumeFileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < 1; $i++) {
            ResumeFile::create([
                'filename' => 'filename',
                'path' => 'path',
                'icon' => 'fa-regular fa-file-pdf',
                'description' => 'description',
            ]);
        }
    }
}
