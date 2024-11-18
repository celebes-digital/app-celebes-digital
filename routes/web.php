<?php

use App\Models\Category;
use App\Models\Client;
use App\Models\Portofolio;
use App\Models\Testimonials;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'portofolios' => Portofolio::with('categories')->latest()->take(3)->get(),
        'testimonials' => Testimonials::latest()->get(),
        'clients' => Client::latest()->get()
    ]);
});

Route::get('/case', function () {
    return Inertia::render('CaseStudy', [
        'portofolios' => Portofolio::with('categories')->latest()->get(),
        'categories' => Category::latest()->get()
    ]);
});

Route::get('/case/{case}/detail', function () {
    return Inertia::render('CaseDetail');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});
