<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;

class GalleryController extends Controller
{
public function index()
{
    $galleries = Gallery::with('images')->get();
    return response()->json($galleries);
}

}
