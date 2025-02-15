<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SocialMediaLink;

class SocialMediaLinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SocialMediaLink::create([
            'icon' => 'fa-brands fa-facebook-square',
            'name' => 'Facebook',
            'url' => 'https://www.facebook.com/drew.borneman/',
        ]);
        SocialMediaLink::create([
            'icon' => 'fa-brands fa-instagram',
            'name' => 'Instagram',
            'url' => 'https://www.instagram.com/supersquashmann/',
        ]);
        SocialMediaLink::create([
            'icon' => 'fa-brands fa-linkedin',
            'name' => 'LinkedIn',
            'url' => 'https://www.linkedin.com/in/dborneman/',
        ]);
    }
}
