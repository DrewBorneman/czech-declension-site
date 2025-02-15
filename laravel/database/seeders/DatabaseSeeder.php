<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {    $this->call([
        ContactDataSeeder::class,
        HomeDataSeeder::class,
        ProjectDataSeeder::class,
        ProjectsSeeder::class,
        ResumeDataSeeder::class,
        ResumeFileSeeder::class,
        SiteInfoSeeder::class,
        SocialMediaLinkSeeder::class,
    ]);
    }
}
