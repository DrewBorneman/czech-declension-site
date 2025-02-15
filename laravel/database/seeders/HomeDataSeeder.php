<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HomeData;

class HomeDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < 1; $i++) {
            HomeData::create([
                'title' => 'title',
                'subtitle' => 'subtitle',
                'tagline' => 'tagline',
                'text' => 'text',
                'imagePath' => 'https://picsum.photos/200/300',
            ]);
        }
    }
}
