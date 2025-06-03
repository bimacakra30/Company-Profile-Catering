<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
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
    public function latest(): JsonResponse
    {
        $latestProducts = Product::with(['category', 'user'])
            ->orderByDesc('id_product') // urut dari id terbesar (produk terbaru)
            ->take(4)
            ->get();

        return response()->json($latestProducts);
    }

}
