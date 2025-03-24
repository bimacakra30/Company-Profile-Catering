<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::with('user')->get();
        return view('gallery.index', compact('galleries'));
    }

    public function create()
    {
        return view('gallery.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'name_event' => 'required|string|max:255',
            'date' => 'required|date',
        ]);

        $path = $request->file('image')->store('gallery', 'public');

        Gallery::create([
            'path_image' => $path,
            'name_event' => $request->name_event,
            'date' => $request->date,
        ]);

        return redirect()->route('gallery.index')->with('success', 'Gallery berhasil ditambahkan.');
    }

    public function edit(Gallery $gallery)
    {
        return view('gallery.edit', compact('gallery'));
    }

    public function update(Request $request, Gallery $gallery)
    {
        $request->validate([
            'name_event' => 'required|string|max:255',
            'date' => 'required|date',
        ]);

        if ($request->hasFile('image')) {
            Storage::disk('public')->delete($gallery->path_image);
            $path = $request->file('image')->store('gallery', 'public');
            $gallery->path_image = $path;
        }

        $gallery->update([
            'name_event' => $request->name_event,
            'date' => $request->date,
        ]);

        return redirect()->route('gallery.index')->with('success', 'Gallery berhasil diperbarui.');
    }

    public function destroy(Gallery $gallery)
    {
        Storage::disk('public')->delete($gallery->path_image);
        $gallery->delete();

        return redirect()->route('gallery.index')->with('success', 'Gallery berhasil dihapus.');
    }
}