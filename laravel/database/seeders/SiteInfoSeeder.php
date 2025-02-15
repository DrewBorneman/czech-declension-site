<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SiteInfo;

class SiteInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0; $i < 1; $i++) {
            SiteInfo::create([
                'name' => 'Drew Borneman',
                'copyrightStatement' => '©2025 Drew Borneman',
                'iconPath' => './public/monogram.svg',
                'passwordHash' => 'f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b',   //asdf
            ]);
        }
    }
}
