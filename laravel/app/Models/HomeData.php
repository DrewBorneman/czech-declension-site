<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeData extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'homeData';
    protected $fillable = ['title','subtitle','tagline','text','imagePath'];
    
}
