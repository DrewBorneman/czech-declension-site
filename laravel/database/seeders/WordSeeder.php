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
        $declensions = json_decode($json, true)['declensions'];

        foreach ($declensions as $declension)
        {
            $currDeclension = $declension['declensions'];
            Word::create([
                'lemma' => $declension['noun'],
                'rank' => $declension['rank'],
                'S1' => $currDeclension[0]['sing'],
                'P1' => $currDeclension[0]['pl'],
                'S2' => $currDeclension[1]['sing'],
                'P2' => $currDeclension[1]['pl'],
                'S3' => $currDeclension[2]['sing'],
                'P3' => $currDeclension[2]['pl'],
                'S4' => $currDeclension[3]['sing'],
                'P4' => $currDeclension[3]['pl'],
                'S5' => $currDeclension[4]['sing'],
                'P5' => $currDeclension[4]['pl'],
                'S6' => $currDeclension[5]['sing'],
                'P6' => $currDeclension[5]['pl'],
                'S7' => $currDeclension[6]['sing'],
                'P7' => $currDeclension[6]['pl'],
            ]);
        }
    }
}
