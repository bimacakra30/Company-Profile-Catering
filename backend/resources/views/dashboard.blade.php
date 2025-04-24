<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{ asset('template/plugins/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('template/dist/css/adminlte.min.css?v=3.2.0') }}">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6f9;
        }

        .welcome-message {
            background-color: transparent;
            margin-bottom: 20px;
        }

        .welcome-message h2 {
            font-size: 1.75rem;
            color: #1b1b1b;
            margin-bottom: 8px;
        }

        .welcome-message p {
            font-size: 1.1rem;
            color: #333;
            margin-bottom: 4px;
        }

        .dashboard-stats .card {
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease-in-out;
        }

        .dashboard-stats .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .icon-box {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e9ecef;
        }

        .latest-section .card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .card-img-top {
            height: 160px;
            object-fit: cover;
        }

        .badge-status {
            padding: 4px 10px;
            font-size: 12px;
            border-radius: 20px;
        }

        .chart-container {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .table-container {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .table th,
        .table td {
            vertical-align: middle;
        }

        .small-chart {
            max-width: 400px;
            max-height: 330px;
        }
    </style>
</head>

<body class="hold-transition sidebar-mini sidebar-collapse">
    <div class="wrapper">

        @include('layouts.navbar')
        @include('layouts.sidebar')

        <div class="content-wrapper">
            <div class="content">
                <div class="container-fluid py-4">
                    <div class="welcome-message py-4 px-3">
                        <h2 class="font-weight-bold">
                            Welcome, {{ Auth::user()->name ?? 'User' }}!
                            <i class="fas fa-smile-beam ml-2"></i>
                        </h2>
                        <p>Have a productive day</p>
                        <p>Hope you have a pleasant day 😊</p>
                    </div>
                    <div class="row dashboard-stats">
                        <div class="col-md-3">
                            <div class="card mb-4">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="text-muted mb-1">Total Products</h6>
                                        <h3 class="mb-0">{{ $totalProducts }}</h3>
                                        @if($productGrowth > 0)
                                            <span class="text-success"><i class="fas fa-arrow-up"></i>
                                                {{ $productGrowth }}%</span>
                                        @elseif($productGrowth < 0)
                                            <span class="text-danger"><i class="fas fa-arrow-down"></i>
                                                {{ abs($productGrowth) }}%</span>
                                        @else
                                            <span class="text-secondary"><i class="fas fa-minus"></i> 0%</span>
                                        @endif
                                    </div>
                                    <div class="icon-box bg-primary-light">
                                        <i class="fas fa-utensils fa-2x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card mb-4">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="text-muted mb-1">Categories</h6>
                                        <h3 class="mb-0">{{ $totalCategories }}</h3>
                                        @if($categoryGrowth > 0)
                                            <span class="text-success"><i class="fas fa-arrow-up"></i>
                                                {{ $categoryGrowth }}%</span>
                                        @elseif($categoryGrowth < 0)
                                            <span class="text-danger"><i class="fas fa-arrow-down"></i>
                                                {{ abs($categoryGrowth) }}%</span>
                                        @else
                                            <span class="text-secondary"><i class="fas fa-minus"></i> 0%</span>
                                        @endif
                                    </div>
                                    <div class="icon-box bg-success-light">
                                        <i class="fas fa-th-list fa-2x text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card mb-4">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="text-muted mb-1">Portfolio</h6>
                                        <h3 class="mb-0">{{ $totalPortfolios }}</h3>
                                        @if($portfolioGrowth > 0)
                                            <span class="text-success"><i class="fas fa-arrow-up"></i>
                                                {{ $portfolioGrowth }}%</span>
                                        @elseif($portfolioGrowth < 0)
                                            <span class="text-danger"><i class="fas fa-arrow-down"></i>
                                                {{ abs($portfolioGrowth) }}%</span>
                                        @else
                                            <span class="text-secondary"><i class="fas fa-minus"></i> 0%</span>
                                        @endif
                                    </div>
                                    <div class="icon-box bg-warning-light">
                                        <i class="fas fa-briefcase fa-2x text-warning"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card mb-4">
                                <div class="card-body d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 class="text-muted mb-1">Reviews</h6>
                                        <h3 class="mb-0">{{ $totalReviews }}</h3>
                                        @if($reviewGrowth > 0)
                                            <span class="text-success"><i class="fas fa-arrow-up"></i>
                                                {{ $reviewGrowth }}%</span>
                                        @elseif($reviewGrowth < 0)
                                            <span class="text-danger"><i class="fas fa-arrow-down"></i>
                                                {{ abs($reviewGrowth) }}%</span>
                                        @else
                                            <span class="text-secondary"><i class="fas fa-minus"></i> 0%</span>
                                        @endif
                                    </div>
                                    <div class="icon-box bg-info-light">
                                        <i class="fas fa-comments fa-2x text-info"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-8">
                            <div class="chart-container">
                                <h5 class="mb-4">Visitor Statistics</h5>
                                <canvas id="visitorChart" height="110"></canvas>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="chart-container">
                                <h5 class="mb-4">Popular Categories</h5>
                                <canvas id="categoryChart" class="small-chart"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="latest-section">
                        <h5 class="mb-3">Latest Products</h5>
                        <div class="row">
                            @forelse($latestProducts as $product)
                                <div class="col-md-3 mb-4">
                                    <div class="card">
                                        <img src="{{ asset('storage/' . $product->path_image) }}" class="card-img-top"
                                            alt="{{ $product->name_product }}">
                                        <div class="card-body">
                                            <h6 class="card-title">{{ $product->name_product }}</h6>
                                            <p class="card-text text-muted mb-2">Rp.
                                                {{ number_format($product->price_product, 0, ',', '.') }}
                                            </p>
                                            <span class="badge badge-success badge-status">Available</span>
                                        </div>
                                    </div>
                                </div>
                            @empty
                                <div class="col-12">
                                    <div class="alert alert-info">No products available.</div>
                                </div>
                            @endforelse
                        </div>
                    </div>

                    <div class="latest-section">
                        <h5 class="mb-3">Latest Reviews</h5>
                        <div class="table-container">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Review</th>
                                        <th>Date</th>
                                        <th>Response</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($latestReviews as $review)
                                        <tr>
                                            <td>{{ $review->customer_name }}</td>
                                            <td>{{ $review->review_text }}</td>
                                            <td>{{ \Carbon\Carbon::parse($review->created_at)->format('d M Y') }}</td>
                                            <td>{{ $review->response_text ?? 'No response yet' }}</td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="5" class="text-center">No reviews yet.</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="latest-section">
                        <h5 class="mb-3">Latest Portfolio</h5>
                        <div class="row">
                            @forelse($latestPortfolios as $portfolio)
                                <div class="col-md-4 mb-4">
                                    <div class="card">
                                        <img src="{{ asset('storage/' . $portfolio->path_image) }}" class="card-img-top"
                                            alt="{{ $portfolio->name_activity }}">
                                        <div class="card-body">
                                            <h6 class="card-title">{{ $portfolio->name_activity }}</h6>
                                            <p class="card-text">{{ Str::limit($portfolio->description, 100) }}</p>
                                            <small
                                                class="text-muted">{{ \Carbon\Carbon::parse($portfolio->date_activity)->format('d M Y') }}</small>
                                        </div>
                                    </div>
                                </div>
                            @empty
                                <div class="col-12">
                                    <div class="alert alert-info">No portfolio available.</div>
                                </div>
                            @endforelse
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('template/plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('template/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('template/dist/js/adminlte.min.js?v=3.2.0') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
    <script>
        var visitorCtx = document.getElementById('visitorChart').getContext('2d');
        var visitorChart = new Chart(visitorCtx, {
            type: 'line',
            data: {
                labels: {!! json_encode($visitorMonths) !!},
                datasets: [{
                    label: 'Visitors',
                    data: {!! json_encode($visitorCounts) !!},
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    tension: 0.3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        var categoryCtx = document.getElementById('categoryChart').getContext('2d');
        var categoryChart = new Chart(categoryCtx, {
            type: 'doughnut',
            data: {
                labels: {!! json_encode($categoryNames) !!},
                datasets: [{
                    data: {!! json_encode($categoryProductCounts) !!},
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(199, 199, 199, 0.7)',
                        'rgba(83, 102, 255, 0.7)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(199, 199, 199, 1)',
                        'rgba(83, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 15
                        }
                    }
                }
            }
        });
    </script>
</body>

</html>
