<?php

use App\Models\Category;
use App\Models\Client;
use App\Models\ContactMessage;
use App\Models\Pesanan;
use App\Models\Portofolio;
use App\Models\Warriors;
use App\Models\Testimonials;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'portofolios' => Portofolio::with('categories')->latest()->take(3)->get(),
        'testimonials' => Testimonials::latest()->get(),
        'clients' => Client::latest()->get(),
        'warriors' => Warriors::latest()->get()
    ]);
});

Route::get('/case', function () {
    $portofolios = Portofolio::with('categories')->latest();

    if (request('category')) {
        $portofolios->whereHas('categories', function ($query) {
            $query->where('categories.id', request('category'));
        });
    }

    return Inertia::render('CaseStudy', [
        'portofolios' => $portofolios->get(),
        'categories' => Category::latest()->get()
    ]);
});

Route::get('/case/{portofolio}/detail', function (Portofolio $portofolio) {
    $portofolio->load(['categories', 'client']);
    return Inertia::render('CaseDetail', [
        'portofolio' => $portofolio
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/contact', function (Request $request) {
    $v = $request->validate([
        'name' => 'required|string|min:2|max:255',
        'email' => 'required|email|min:2|max:255',
        'no_telepon' => 'required|string|min:12|max:13',
        'ide' => 'required|min:2'
    ]);

    ContactMessage::create($v);

    return redirect()->intended(route('contact'));
});
