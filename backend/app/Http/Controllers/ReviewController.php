<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::with('user')->get();
        return view('review.index', compact('reviews'));
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'respon_text' => 'required',
            'id_user' => 'required|exists:users,id_user',
        ]);

        $review = Review::findOrFail($id);
        $review->respon_text = $request->respon_text;
        $review->id_user = $request->id_user;
        $review->save();

        return redirect()->route('review.index')->with('success', 'Respond to Review successfully!');
    }


    public function destroy($id)
    {
        $review = Review::findOrFail($id);
        $review->delete();

        return redirect()->back()->with('success', 'Review successfully deleted.');
    }
}
