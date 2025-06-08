<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;
use App\Models\PortfolioImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::with(['user', 'images'])->get();
        return view('portfolio.index', compact('portfolios'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name_activity' => 'required|string|max:255',
            'description' => 'required|string|max:300',
            'date_activity' => 'required|date',
            'path_image.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120',
        ]);

        // Simpan data portfolio dulu
        $portfolio = new Portfolio();
        $portfolio->id_user = Auth::id();
        $portfolio->name_activity = $request->name_activity;
        $portfolio->description = $request->description;
        $portfolio->date_activity = $request->date_activity;
        $portfolio->save();

        // Simpan gambar-gambar
        if ($request->hasFile('path_image')) {
            foreach ($request->file('path_image') as $imageFile) {
                $path = $imageFile->store('portfolio', 'public');

                PortfolioImage::create([
                    'id_portfolio' => $portfolio->id_portfolio,
                    'path_image' => $path
                ]);
            }
        }

        return redirect()->back()->with('success', 'Portfolio successfully added.');
    }

    public function update(Request $request, $id)
    {
        $portfolio = Portfolio::findOrFail($id);

        $request->validate([
            'name_activity' => 'required|string|max:255',
            'description' => 'required|string|max:300',
            'date_activity' => 'required|date',
            'path_image.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120',
        ]);

        // Hapus gambar yang dicentang
        if ($request->has('delete_images')) {
            foreach ($request->delete_images as $id_image) {
                $image = PortfolioImage::find($id_image);
                if ($image) {
                    Storage::disk('public')->delete($image->path_image);
                    $image->delete();
                }
            }
        }

        // Update data portfolio
        $portfolio->name_activity = $request->name_activity;
        $portfolio->description = $request->description;
        $portfolio->date_activity = $request->date_activity;
        $portfolio->save();

        // Tambahkan gambar baru (jika ada)
        if ($request->hasFile('path_image')) {
            foreach ($request->file('path_image') as $imageFile) {
                $path = $imageFile->store('portfolio', 'public');

                PortfolioImage::create([
                    'id_portfolio' => $portfolio->id_portfolio,
                    'path_image' => $path
                ]);
            }
        }

        return redirect()->back()->with('success', 'Portfolio successfully updated.');
    }

    public function destroy($id)
    {
        $portfolio = Portfolio::findOrFail($id);

        // Hapus semua gambar terkait
        foreach ($portfolio->images as $image) {
            Storage::disk('public')->delete($image->path_image);
            $image->delete();
        }

        // Hapus portfolio
        $portfolio->delete();

        return redirect()->back()->with('success', 'Portfolio successfully deleted.');
    }
}
