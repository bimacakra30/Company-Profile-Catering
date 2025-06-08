<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::all();
        return view('gallery.index', compact('galleries'));
    }

public function store(Request $request)
{
    $request->validate([
        'name_event' => 'required|string|max:50',
        'date' => 'required|date',
        'path_image.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    // Simpan data gallery dulu
    $gallery = new Gallery();
    $gallery->id_user = auth()->id(); // Atau sesuaikan dengan sistem auth kamu
    $gallery->name_event = $request->name_event;
    $gallery->date = $request->date;
    $gallery->save();

    // Simpan gambar-gambar
    if ($request->hasFile('path_image')) {
        foreach ($request->file('path_image') as $imageFile) {
            $path = $imageFile->store('images', 'public');

            \App\Models\GalleryImage::create([
                'id_gallery' => $gallery->id_gallery,
                'path_image' => $path
            ]);
        }
    }

    return redirect()->route('gallery.index')->with('success', 'Gallery created successfully!');
}


public function update(Request $request, $id)
{
    $request->validate([
        'name_event' => 'required|string|max:50',
        'date' => 'required|date',
        'path_image.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    $gallery = Gallery::findOrFail($id);

    // Hapus gambar yang dicentang
    if ($request->has('delete_images')) {
        foreach ($request->delete_images as $id_image) {
            $image = \App\Models\GalleryImage::find($id_image);
            if ($image) {
                \Storage::disk('public')->delete($image->path_image);
                $image->delete();
            }
        }
    }

    // Update data gallery
    $gallery->name_event = $request->name_event;
    $gallery->date = $request->date;
    $gallery->save();

    // Tambahkan gambar baru (jika ada)
    if ($request->hasFile('path_image')) {
        foreach ($request->file('path_image') as $imageFile) {
            $path = $imageFile->store('images', 'public');

            \App\Models\GalleryImage::create([
                'id_gallery' => $gallery->id_gallery,
                'path_image' => $path
            ]);
        }
    }

    return redirect()->route('gallery.index')->with('success', 'Gallery berhasil diupdate.');
}

  
        public function destroy($id)
    {
        $gallery = Gallery::findOrFail($id);

        if ($gallery->path_image && Storage::disk('public')->exists($gallery->path_image)) {
            Storage::disk('public')->delete($gallery->path_image);
        }

        $gallery->delete();

        return redirect()->back()->with('success', 'Gallery successfully deleted.');
    }
}