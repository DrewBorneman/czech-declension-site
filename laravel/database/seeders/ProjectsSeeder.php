<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Projects;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < 1; $i++) {
            Projects::create([
                'title' => 'title',
                'date' => 'date',
                'text' => 'text',
                'url' => 'url',
                'imagePath' => 'imagePath',
            ]);
        }
    }
}
