<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/case', function () {
    return Inertia::render('CaseStudy');
});

Route::get('/case/{case}/detail', function () {
    return Inertia::render('CaseDetail');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});
