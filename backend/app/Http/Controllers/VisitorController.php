<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Visitor;
use Carbon\Carbon;

class VisitorController extends Controller
{
    public function track(Request $request)
    {
        $ip = $request->ip();
        $userAgent = $request->header('User-Agent');
        $today = Carbon::today();

        $alreadyVisited = Visitor::where('ip_address', $ip)
            ->where('user_agent', $userAgent)
            ->whereDate('visited_at', $today)
            ->exists();

        if (!$alreadyVisited) {
            Visitor::create([
                'ip_address' => $ip,
                'user_agent' => $userAgent,
                'visited_at' => now(),
            ]);
        }

        return response()->json(['status' => 'ok']);
    }
}
