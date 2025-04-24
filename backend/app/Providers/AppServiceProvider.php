<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Category;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Request;
use App\Models\Visitor;

class AppServiceProvider extends ServiceProvider
{

public function boot()
{
    View::composer('*', function ($view) {
        $view->with('sidebarCategories', Category::all());
    });

    view()->composer('*', function () {
        try {
            Visitor::create([
                'ip_address' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'page' => request()->path(),
                'visited_at' => now(),
            ]);
        } catch (\Exception $e) {
            // Fail silently (misal belum migrate)
        }
    });
}

    
}
