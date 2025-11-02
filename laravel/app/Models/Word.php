<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    use HasFactory;

    protected $casts = [
        'P1' => 'array',
        'S1' => 'array',
        'P2' => 'array',
        'S2' => 'array',
        'P3' => 'array',
        'S3' => 'array',
        'P4' => 'array',
        'S4' => 'array',
        'P5' => 'array',
        'S5' => 'array',
        'P6' => 'array',
        'S6' => 'array',
        'P7' => 'array',
        'S7' => 'array'
    ];

    public $timestamps = false;
    protected $table = 'Word';
    protected $fillable = ['lemma','rank','P1','S1','P2','S2','P3','S3','P4','S4','P5','S5','P6','S6','P7','S7'];
    
}
