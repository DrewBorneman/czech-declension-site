<?php

namespace Database\Seeders;


use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\ContactData;

class ContactDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ContactData::create([
            'title' => 'title',
            'subtitle' => 'subtitle',
            'text' => 'text',
        ]);
    }
}
