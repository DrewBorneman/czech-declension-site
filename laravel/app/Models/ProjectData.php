<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectData extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'projectData';
    protected $fillable = ['title','text'];
    
}
