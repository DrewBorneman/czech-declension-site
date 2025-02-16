<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProjectData;

class ProjectDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < 1; $i++) {
            ProjectData::create([
                'title' => 'Projects',
                'text' => 'I have been lucky enough to work on a wide variety of projects, both while employed and for my own interest.  Here are some of the highlights:',
            ]);
        }
    }
}
