<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResumeFile extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'resumeFile';
    protected $fillable = ['filename','path','icon','description'];
    
}
