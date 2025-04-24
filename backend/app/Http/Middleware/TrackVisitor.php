<?php

// app/Http/Middleware/TrackVisitor.php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Visitor;

class TrackVisitor
{
    public function handle(Request $request, Closure $next)
    {
        Visitor::create([
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'page' => $request->path(),
            'visited_at' => now()
        ]);

        return $next($request);
    }
}

