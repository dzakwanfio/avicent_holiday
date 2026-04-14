<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'services' => \App\Models\Service::all(),
        'vehicles' => \App\Models\Vehicle::where('is_active', true)->latest()->get(),
        'clients' => \App\Models\Client::latest()->take(6)->get(),
        'projects' => \App\Models\Project::latest()->get(),
        'testimonials' => \App\Models\Testimonial::latest()->get(),
        'posts' => \App\Models\Post::where('is_published', true)->latest()->get(),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin Management Routes
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('services', \App\Http\Controllers\Admin\ServiceController::class);
        Route::resource('vehicles', \App\Http\Controllers\Admin\VehicleController::class);
        Route::resource('clients', \App\Http\Controllers\Admin\ClientController::class);
        Route::resource('projects', \App\Http\Controllers\Admin\ProjectController::class);
        Route::resource('testimonials', \App\Http\Controllers\Admin\TestimonialController::class);
        Route::resource('posts', \App\Http\Controllers\Admin\PostController::class);
    });
});

require __DIR__.'/auth.php';
