<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Timeschedule extends Model
{
    protected $guarded = ['id'];

    public function pic()
    {
        return $this->belongsTo(User::class);
    }
}
