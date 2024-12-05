<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = ['id'];

    public function portofolio()
    {
        return $this->hasMany(Portofolio::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
