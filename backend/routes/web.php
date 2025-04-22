<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PortfolioController;
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

    Route::prefix('gallery')->group(function () {
        Route::get('/', [GalleryController::class, 'index'])->name('gallery.index');
        Route::post('/', [GalleryController::class, 'store'])->name('gallery.store');
        Route::put('/{id_gallery}', [GalleryController::class, 'update'])->name('gallery.update');
        Route::delete('/{id_gallery}', [GalleryController::class, 'destroy'])->name('gallery.destroy');
    });

    Route::prefix('portfolio')->group(function () {
        Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.index');
        Route::post('/', [PortfolioController::class, 'store'])->name('portfolio.store');
        Route::put('/{id_portfolio}', [PortfolioController::class, 'update'])->name('portfolio.update');
        Route::delete('/{id_portfolio}', [PortfolioController::class, 'destroy'])->name('portfolio.destroy');
    });

    Route::prefix('category')->group(function () {
        Route::get('/', [\App\Http\Controllers\CategoryController::class, 'index'])->name('category.index');
        Route::post('/', [\App\Http\Controllers\CategoryController::class, 'store'])->name('category.store');
        Route::put('/{id_category}', [\App\Http\Controllers\CategoryController::class, 'update'])->name('category.update');
        Route::delete('/{id_category}', [\App\Http\Controllers\CategoryController::class, 'destroy'])->name('category.destroy');
    });

    Route::prefix('product')->group(function () {
        Route::get('/product/category/{id}', [\App\Http\Controllers\ProductController::class, 'byCategory'])->name('product.category');
        Route::get('/', [\App\Http\Controllers\ProductController::class, 'index'])->name('product.index');
        Route::post('/', [\App\Http\Controllers\ProductController::class, 'store'])->name('product.store');
        Route::put('/{id_product}', [\App\Http\Controllers\ProductController::class, 'update'])->name('product.update');
        Route::delete('/{id_product}', [\App\Http\Controllers\ProductController::class, 'destroy'])->name('product.destroy');
    });

    

});

Route::prefix('user')->group(function () {
    Route::group(['middleware' => ['auth']], function () {
        Route::group(['middleware' => function ($request, $next) {
            if (auth()->user()->level !== 'Owner') {
                abort(403, 'Unauthorized');
            }
            return $next($request);
        }], function () {
            Route::get('/', [UserController::class, 'index'])->name('users.index');
            Route::get('/create', [UserController::class, 'create'])->name('users.create');
            Route::post('/', [UserController::class, 'store'])->name('users.store');
            Route::get('/{id}', [UserController::class, 'show'])->name('users.show');
            Route::get('/{id_user}/edit', [UserController::class, 'edit'])->name('users.edit');
            Route::put('/{id_user}', [UserController::class, 'update'])->name('users.update');
            Route::put('/{id_user}/deactivate', [UserController::class, 'deactivate'])->name('users.deactivate');
        });
    });
});

