<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return view('category.index', compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name_category' => 'required|string|max:255',
        ]);

        Category::create([
            'name_category' => $request->name_category,
            'id_user' => Auth::id(),
        ]);

        return redirect()->back()->with('success', 'Category successfully added.');
    }

    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $request->validate([
            'name_category' => 'required|string|max:255',
        ]);

        $category->name_category = $request->name_category;
        $category->save();

        return redirect()->back()->with('success', 'Category successfully updated.');
    }

    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return redirect()->back()->with('success', 'Category successfully deleted.');
    }
}
