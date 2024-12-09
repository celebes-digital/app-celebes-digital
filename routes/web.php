<?php

use App\Models\Category;
use App\Models\Client;
use App\Models\ContactMessage;
use App\Models\Galery;
use App\Models\Konten;
use App\Models\Pesanan;
use App\Models\Portofolio;
use App\Models\Product;
use App\Models\Warriors;
use App\Models\Testimonials;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'portofolios' => Portofolio::with('product')->latest()->take(3)->get(),
        'products' => Product::all(),
        'testimonials' => Testimonials::latest()->get(),
        'clients' => Client::latest()->get(),
        'warriors' => Warriors::latest()->get(),
        'galeries' => Galery::latest()->take(3)->get(),
        'kontens' => Konten::latest()->get()
    ]);
});

Route::get('/case', function () {
    $portofolios = Portofolio::with('product.categories')->latest();

    if ($categorySlug = request('category')) {
        $portofolios->whereHas('product.categories', function ($query) use ($categorySlug) {
            $query->where('categories.slug', $categorySlug);
        });
    }

    return Inertia::render('CaseStudy', [
        'portofolios' => $portofolios->paginate(6)->appends(request()->query()),
        'categories' => Category::latest()->get()
    ]);
});

Route::get('/galeri', function () {
    return Inertia::render('Galeri', [
        'galeries' => Galery::latest()->paginate(8)
    ]);
});

Route::get('/case/{portofolio}/detail', function (Portofolio $portofolio) {
    $portofolio->load(['product', 'client']);
    return Inertia::render('CaseDetail', [
        'portofolio' => $portofolio
    ]);
});

Route::get('/case/{product}', function (Product $product) {
    $portofolios = Portofolio::with('product.categories')->latest();

    if (request('category')) {
        $portofolios->whereHas('product.categories', function ($query) {
            $query->where('categories.slug', request('category'));
        });
    }

    $portofolios->where('product_id', $product->id);

    $product->load(['categories', 'clients']);

    return Inertia::render('CaseStudy', [
        'portofolios' => $portofolios->paginate(6)->appends(request()->query()),
        'product' => $product,
        'categories' => $product->categories
    ]);
});

Route::get('/product/{product}', function (Product $product) {
    $product->load(['categories', 'clients']);

    return Inertia::render('ProductDetail', [
        'product' => $product
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

    if ($request->has('product_id')) {
        $v['product_id'] = $request->product_id;
    }

    ContactMessage::create($v);

    return;
});
