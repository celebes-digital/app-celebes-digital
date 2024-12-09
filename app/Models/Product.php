<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = ['id'];

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('categories', function ($query) {
            $query->with(['categories']);
        });
    }

    public function portofolio()
    {
        return $this->hasMany(Portofolio::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function clients()
    {
        return $this->belongsToMany(Client::class, 'product_client');
    }

    public function contact_messages()
    {
        return $this->hasMany(ContactMessage::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    protected function casts(): array
    {
        return [
            'screenshots' => 'array',
        ];
    }
}
