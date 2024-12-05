<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Timeschedule extends Model
{
    protected $guarded = ['id'];

    protected $casts = [
        'is_finished' => 'boolean',
    ];

    public function pic()
    {
        return $this->belongsToMany(User::class);
    }

    public function itemKerja()
    {
        return $this->belongsTo(ItemKerja::class);
    }

    public function getStatusAttribute()
    {
        return $this->is_finished;
    }
}
