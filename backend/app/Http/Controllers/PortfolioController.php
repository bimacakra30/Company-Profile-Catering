<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Carbon\Carbon;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::with('user')->get();
        return view('portfolio.index', compact('portfolios'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120',
            'name_activity' => 'required|string|max:255',
            'description' => 'required|string|max:300',
            'date_activity' => 'required|date',
        ]);
    
        $eventName = Str::slug(Str::limit($request->name_activity, 15));
        $date = \Carbon\Carbon::parse($request->date_activity)->format('dmY');
        $ext = $request->file('image')->getClientOriginalExtension();
        $filename = "{$eventName}_{$date}." . $ext;
    
        $path = $request->file('image')->storeAs('portfolio', $filename, 'public');
    
        Portfolio::create([
            'path_image' => $path,
            'name_activity' => $request->name_activity,
            'description' => $request->description,
            'date_activity' => $request->date_activity,
            'id_user' => Auth::id(),
        ]);
    
        return redirect()->back()->with('success', 'Portfolio successfully added.');
    }    

    public function update(Request $request, $id)
    {
        $portfolio = Portfolio::findOrFail($id);

        $request->validate([
            'name_activity' => 'required|string|max:255',
            'description' => 'required|string|max:300',
            'date_activity' => 'required|date',
            'image' => 'nullable|image|max:5120',
        ]);

        $portfolio->name_activity = $request->name_activity;
        $portfolio->description = $request->description;
        $portfolio->date_activity = $request->date_activity;

        if ($request->hasFile('image')) {
            if ($portfolio->path_image && Storage::disk('public')->exists($portfolio->path_image)) {
                Storage::disk('public')->delete($portfolio->path_image);
            }

            $path = $request->file('image')->store('portfolio', 'public');
            $portfolio->path_image = $path;
        }

        $portfolio->save();

        return redirect()->back()->with('success', 'Portfolio berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $portfolio = Portfolio::findOrFail($id);

        if ($portfolio->path_image && Storage::disk('public')->exists($portfolio->path_image)) {
            Storage::disk('public')->delete($portfolio->path_image);
        }

        $portfolio->delete();

        return redirect()->back()->with('success', 'Portfolio successfully deleted.');
    }
}
