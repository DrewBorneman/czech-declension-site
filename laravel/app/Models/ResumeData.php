<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResumeData extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'resumeData';
    protected $fillable = ['title','text'];
    
}
