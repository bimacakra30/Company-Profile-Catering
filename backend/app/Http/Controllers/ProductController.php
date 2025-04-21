<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('user', 'category')->get(); // Pastikan relasi 'user' dan 'category' sudah ada di model Product
        $categories = Category::all(); // Ambil semua kategori dari tabel categories
    
        return view('product.index', compact('products', 'categories'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120',
            'name_product' => 'required|string|max:255',
            'description' => 'required|string|max:300',
            'price_product' => 'required|numeric',
            'id_category' => 'required|exists:categories,id_category',
        ]);
    
        $eventName = Str::slug(Str::limit($request->name_product, 15));
        $date = \Carbon\Carbon::now()->format('dmY');
        $ext = $request->file('image')->getClientOriginalExtension();
        $filename = "{$eventName}_{$date}." . $ext;
    
        $path = $request->file('image')->storeAs('products', $filename, 'public');
    
        Product::create([
            'path_image' => $path,
            'name_product' => $request->name_product,
            'description' => $request->description,
            'price_product' => $request->price_product,
            'id_category' => $request->id_category,
            'id_user' => Auth::id(),
        ]);
    
        return redirect()->back()->with('success', 'Product successfully added.');
    }    

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'name_product' => 'required|string|max:255',
            'description' => 'required|string|max:300',
            'price_product' => 'required|numeric',
            'id_category' => 'required|exists:categories,id_category',
            'image' => 'nullable|image|max:5120',
        ]);

        $product->name_product = $request->name_product;
        $product->description = $request->description;
        $product->price_product = $request->price_product;
        $product->id_category = $request->id_category;

        if ($request->hasFile('image')) {
            if ($product->path_image && Storage::disk('public')->exists($product->path_image)) {
                Storage::disk('public')->delete($product->path_image);
            }

            $path = $request->file('image')->store('products', 'public');
            $product->path_image = $path;
        }

        $product->save();

        return redirect()->back()->with('success', 'Product successfully updated.');
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        if ($product->path_image && Storage::disk('public')->exists($product->path_image)) {
            Storage::disk('public')->delete($product->path_image);
        }

        $product->delete();

        return redirect()->back()->with('success', 'Product successfully deleted.');
    }
}
