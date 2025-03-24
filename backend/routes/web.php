<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GalleryController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login.process');
});

Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return view('index');
    })->name('dashboard');

    Route::prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('users.index');
        Route::get('/create', [UserController::class, 'create'])->name('users.create');
        Route::post('/', [UserController::class, 'store'])->name('users.store');
        Route::get('/{id}', [UserController::class, 'show'])->name('users.show');
        Route::get('/{id_user}/edit', [UserController::class, 'edit'])->name('users.edit');
        Route::put('/{id_user}', [UserController::class, 'update'])->name('users.update');
        Route::put('/{id_user}/deactivate', [UserController::class, 'deactivate'])->name('users.deactivate');

    });

    Route::prefix('gallery')->group(function () {
        Route::get('/', [GalleryController::class, 'index'])->name('gallery.index');
        Route::get('/create', [GalleryController::class, 'create'])->name('gallery.create');
        Route::post('/', [GalleryController::class, 'store'])->name('gallery.store');
        Route::get('/{id_gallery}/edit', [GalleryController::class, 'edit'])->name('gallery.edit');
        Route::put('/{id_gallery}', [GalleryController::class, 'update'])->name('gallery.update');
        Route::delete('/{id_gallery}', [GalleryController::class, 'destroy'])->name('gallery.destroy');
    });
});
