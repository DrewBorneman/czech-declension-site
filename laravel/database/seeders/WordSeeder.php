<?php

namespace Database\Seeders;


use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\Word;

class WordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = file_get_contents(database_path('seeders/data/declensions.json'));
        $declensions = json_decode($json, true);

        foreach ($declensions as $declension)
        Word::create([
            'lemma' => $declension['noun'],
            'rank' => $declension['rank'],
            '1S' => $declension['declensions'][0]['sing'],
            '1P' => $declension['declensions'][0]['pl'],
            '2S' => $declension['declensions'][1]['sing'],
            '2P' => $declension['declensions'][1]['pl'],
            '3S' => $declension['declensions'][2]['sing'],
            '3P' => $declension['declensions'][2]['pl'],
            '4S' => $declension['declensions'][3]['sing'],
            '4P' => $declension['declensions'][3]['pl'],
            '5S' => $declension['declensions'][4]['sing'],
            '5P' => $declension['declensions'][4]['pl'],
            '6S' => $declension['declensions'][5]['sing'],
            '6P' => $declension['declensions'][5]['pl'],
            '7S' => $declension['declensions'][6]['sing'],
            '7P' => $declension['declensions'][6]['pl'],
        ]);
    }
}
