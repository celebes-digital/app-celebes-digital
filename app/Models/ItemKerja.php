<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemKerja extends Model
{
    protected $guarded = ['id'];

    public function schedule()
    {
        return $this->hasMany(Timeschedule::class);
    }
}
