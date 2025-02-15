<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteInfo extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $table = 'siteInfo';
    protected $fillable = ['name','copyrightStatement','iconPath','passwordHash'];
    
}
