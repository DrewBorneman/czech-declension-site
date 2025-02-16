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
            'title' => 'Contact',
            'subtitle' => 'Here\'s how to get ahold of me.',
            'text' => 'Please send any inquiries to my email at <span class="font-bold">drewwborneman@gmail.com</span>.<br />You can also find me on the following platforms:',
        ]);
    }
}
