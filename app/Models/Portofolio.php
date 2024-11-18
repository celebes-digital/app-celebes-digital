<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portofolio extends Model
{
    protected $guarded = ['id'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    protected function casts(): array
    {
        return [
            'screenshots' => 'array',
        ];
    }
}
