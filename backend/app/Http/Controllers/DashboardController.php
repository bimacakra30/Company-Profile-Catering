<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Portfolio;
use App\Models\Review;
use App\Models\Visitor;
use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;

class DashboardController extends Controller
{
    public function index()
    {
        // Statistik pengunjung 12 bulan terakhir
        $visitorMonths = [];
        $visitorCounts = [];

        for ($i = 11; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $visitorMonths[] = $date->format('M');
            $visitorCounts[] = Visitor::whereYear('visited_at', $date->year)
                ->whereMonth('visited_at', $date->month)
                ->count();
        }

        // Hitung total data
        $totalProducts = Product::count();
        $totalCategories = Category::count();
        $totalPortfolios = Portfolio::count();
        $totalReviews = Review::count();

        // Hitung pertumbuhan (simulasi via ID)
        $maxProductId = Product::max('id_product') ?? 0;
        $maxCategoryId = Category::max('id_category') ?? 0;
        $maxPortfolioId = Portfolio::max('id_portfolio') ?? 0;
        $maxReviewId = Review::max('id_review') ?? 0;

        $previousProductThreshold = intval($maxProductId * 0.8);
        $previousCategoryThreshold = intval($maxCategoryId * 0.8);
        $previousPortfolioThreshold = intval($maxPortfolioId * 0.8);
        $previousReviewThreshold = intval($maxReviewId * 0.8);

        $productsThisMonth = Product::where('id_product', '>', $previousProductThreshold)->count();
        $productsPreviousMonth = Product::where('id_product', '<=', $previousProductThreshold)
            ->where('id_product', '>', $previousProductThreshold * 0.8)->count();
        $productGrowth = $productsPreviousMonth > 0
            ? round((($productsThisMonth - $productsPreviousMonth) / $productsPreviousMonth) * 100)
            : 0;

        $categoriesThisMonth = Category::where('id_category', '>', $previousCategoryThreshold)->count();
        $categoriesPreviousMonth = Category::where('id_category', '<=', $previousCategoryThreshold)
            ->where('id_category', '>', $previousCategoryThreshold * 0.8)->count();
        $categoryGrowth = $categoriesPreviousMonth > 0
            ? round((($categoriesThisMonth - $categoriesPreviousMonth) / $categoriesPreviousMonth) * 100)
            : 0;

        $currentMonth = Carbon::now()->month;
        $previousMonth = Carbon::now()->subMonth()->month;

        $portfoliosThisMonth = Portfolio::whereMonth('date_activity', $currentMonth)->count();
        $portfoliosPreviousMonth = Portfolio::whereMonth('date_activity', $previousMonth)->count();
        $portfolioGrowth = $portfoliosPreviousMonth > 0
            ? round((($portfoliosThisMonth - $portfoliosPreviousMonth) / $portfoliosPreviousMonth) * 100)
            : 0;

        if (Schema::hasColumn('review', 'created_at')) {
            $reviewsThisMonth = Review::whereMonth('created_at', $currentMonth)->count();
            $reviewsPreviousMonth = Review::whereMonth('created_at', $previousMonth)->count();
        } else {
            $reviewsThisMonth = Review::where('id_review', '>', $previousReviewThreshold)->count();
            $reviewsPreviousMonth = Review::where('id_review', '<=', $previousReviewThreshold)
                ->where('id_review', '>', $previousReviewThreshold * 0.8)->count();
        }

        $reviewGrowth = $reviewsPreviousMonth > 0
            ? round((($reviewsThisMonth - $reviewsPreviousMonth) / $reviewsPreviousMonth) * 100)
            : 0;

        // Data terbaru
        $latestProducts = Product::orderByDesc('id_product')->take(4)->get();
        $latestReviews = Review::with('user')->orderByDesc('id_review')->take(5)->get();
        $latestPortfolios = Portfolio::orderByDesc('date_activity')->take(3)->get();

        // Chart kategori
        $categories = Category::all();
        $categoryNames = [];
        $categoryProductCounts = [];

        foreach ($categories as $category) {
            $categoryNames[] = $category->name_category;
            $categoryProductCounts[] = Product::where('id_category', $category->id_category)->count();
        }

        if (count($categoryNames) > 8) {
            $categoryNames = array_slice($categoryNames, 0, 8);
            $categoryProductCounts = array_slice($categoryProductCounts, 0, 8);
        }

        return view('dashboard', compact(
            'totalProducts',
            'totalCategories',
            'totalPortfolios',
            'totalReviews',
            'productGrowth',
            'categoryGrowth',
            'portfolioGrowth',
            'reviewGrowth',
            'latestProducts',
            'latestReviews',
            'latestPortfolios',
            'visitorMonths',
            'visitorCounts',
            'categoryNames',
            'categoryProductCounts'
        ));
    }
}