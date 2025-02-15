<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialMediaLink extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'socialMediaLink';
    protected $fillable = ['icon','name','url'];
    
}
