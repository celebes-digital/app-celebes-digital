<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $guarded = ['id'];

    public function portofolios()
    {
        return $this->hasMany(Portofolio::class);
    }
}
