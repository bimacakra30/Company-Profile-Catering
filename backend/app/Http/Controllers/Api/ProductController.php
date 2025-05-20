<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('user', 'category')->get();
        $categories = Category::all();

        return response()->json([
            'products' => $products,
            'categories' => $categories,
        ]);
    }

    // Tambahkan method lain sesuai kebutuhan (store, update, delete)
}
