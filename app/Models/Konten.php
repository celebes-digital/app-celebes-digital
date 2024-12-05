<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Konten extends Model
{
    protected $guarded = ['id'];

    public function socialMedia()
    {
        return $this->belongsTo(SocialMedia::class);
    }
}
