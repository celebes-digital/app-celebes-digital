<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialMedia extends Model
{
    protected $guarded = ['id'];

    public function konten()
    {
        return $this->hasMany(Konten::class);
    }
}
