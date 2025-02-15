<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactData extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'contactData';
    protected $fillable = ['title','subtitle','text'];
    
}
