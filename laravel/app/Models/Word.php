<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'Word';
    protected $fillable = ['lemma','rank','1P','1S','2P','2S','3P','3S','4P','4S','5P','5S','6P','6S','7P','7S'];
    
}
