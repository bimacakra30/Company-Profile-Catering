<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ReviewController;

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/galleries', [GalleryController::class, 'index']);
Route::get('/portfolios', [PortfolioController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/reviews', [ReviewController::class, 'index']);


