<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::with('user')->get();
        return response()->json($reviews);
    }

        // Simpan review baru
public function store(Request $request)
{
    $validated = $request->validate([
        'customer_name' => 'required|string|max:50',
        'review_text' => 'required|string|max:255',
    ]);

    $review = Review::create($validated);

    return response()->json([
        'message' => 'Review berhasil dikirim!',
        'data' => $review
    ], 201);
}

}
