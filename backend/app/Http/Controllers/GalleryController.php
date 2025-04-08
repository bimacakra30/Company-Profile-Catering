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
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'name_event' => 'required|string|max:255',
            'date' => 'required|date',
        ]);
    
        $path = $request->file('image')->store('gallery', 'public');
    
        Gallery::create([
            'path_image' => $path,
            'name_event' => $request->name_event,
            'date' => $request->date,
            'id_user' => Auth::id()
        ]);
    
        return redirect()->route('gallery.index')->with('success', 'Gallery berhasil ditambahkan.');
    }
 
    public function update(Request $request, Gallery $gallery)
    {
        $request->validate([
            'name_event' => 'required|string|max:255',
            'date' => 'required|date',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        $data = [
            'name_event' => $request->name_event,
            'date' => $request->date,
        ];
    
        if ($request->hasFile('image')) {
            if ($gallery->path_image) {
                Storage::disk('public')->delete($gallery->path_image);
            }
    
            $path = $request->file('image')->store('gallery', 'public');
            $data['path_image'] = $path;
        }
    
        $gallery->update($data);
    
        return redirect()->route('gallery.index')->with('success', 'Gallery berhasil diperbarui.');
    }
    

    public function destroy($id)
    {
        $gallery = Gallery::findOrFail($id);

        if ($gallery->path_image && Storage::disk('public')->exists($gallery->path_image)) {
            Storage::disk('public')->delete($gallery->path_image);
        }

        $gallery->delete();

        return redirect()->route('gallery.index')->with('success', 'Gallery berhasil dihapus.');
    }
    
    
}
