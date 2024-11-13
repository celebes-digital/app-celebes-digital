<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('GuestUser/Welcome');
});

Route::get('/case', function () {
    return Inertia::render('GuestUser/CaseStudy');
});

Route::get('/case/{case}/detail', function () {
    return Inertia::render('GuestUser/CaseDetail');
});

Route::get('/contact', function () {
    return Inertia::render('GuestUser/Contact');
});

Route::middleware('auth')->prefix('/admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
