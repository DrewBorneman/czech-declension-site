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
        HomeData::create([
            'title' => 'Welcome!',
            'subtitle' => 'Let me introduce myself.',
            'tagline' => 'Software developer, and much more',
            'text' => 'I\'m Drew, a software developer currently based in Brno, Czechia.  I\'ve always had a passion for creating, exploring and learning, which I strive to exemplify both in and outside of my work.  As a developer, after graduating with a degree in Computer Engineering from Case Western Reserve University in 2019, I\'ve worked on projects involving full-stack web development, extensions for ERP systems, and most recently embedded firmware development, and have also continued my exploration of various technologies via my personal projects, dabbling in additional fields such as UX design and Android app development. Outside of development, I enjoy language learning, traveling, cooking, and music composition.<br /><br />Thank you for paying my site a visit, and feel free to check out my work on the Resume and Project pages, or get in touch on the Contact page.',
            'imagePath' => './files/me.jpg',
        ]);
    }
}
