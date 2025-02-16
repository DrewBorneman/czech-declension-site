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
        ResumeFile::create([
            'filename' => 'resume.pdf',
            'path' => './files/resume.pdf',
            'icon' => 'fa-regular fa-file-pdf',
            'description' => 'Resume (PDF)',
        ]);
        ResumeFile::create([
            'filename' => 'resume.docx',
            'path' => './files/resume.docx',
            'icon' => 'fa-regular fa-file-word',
            'description' => 'Resume (DOCX)',
        ]);
    }
}
