<aside class="main-sidebar sidebar-light-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link text-center">
        <span class="brand-text font-weight-light"><b>Admin Panel</b></span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- User Panel -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex flex-column align-items-center text-center">
            <div class="image mb-2">
                <i class="fas fa-user-tie fa-3x text-warning"></i>
            </div>
            <div class="info">
                <a href="#" class="d-block font-weight-bold text-white">{{ Auth::user()->name }}</a>
            </div>
        </div>

        <hr style="border-color: rgba(255,255,255,0.2); width: 80%; margin: auto;">

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a href="{{ route('dashboard') }}"
                       class="nav-link {{ request()->routeIs('dashboard') ? 'menu-active' : '' }}">
                        <i class="nav-icon fas fa-home"></i>
                        <p> Dashboard </p>
                    </a>
                </li>

                @if(Auth::user()->level === 'Owner')
                <li class="nav-item">
                    <a href="{{ route('users.index') }}"
                       class="nav-link {{ request()->routeIs('users.index') ? 'menu-active' : '' }}">
                        <i class="nav-icon fas fa-user"></i>
                        <p> User Management </p>
                    </a>
                </li>
                @endif

                <li class="nav-item">
                    <a href="{{ route('gallery.index') }}"
                       class="nav-link {{ request()->routeIs('gallery.index') ? 'menu-active' : '' }}">
                        <i class="nav-icon fas fa-images"></i>
                        <p> Gallery </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ route('portfolio.index') }}"
                       class="nav-link {{ request()->routeIs('portfolio.index') ? 'menu-active' : '' }}">
                        <i class="fas fa-archive nav-icon"></i>
                        <p> Portfolio </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link d-flex justify-content-between align-items-center {{ request()->is('paket-*') ? 'menu-active' : '' }}">
                        <div class="d-flex align-items-center">
                            <i class="nav-icon fas fa-utensils"></i>
                            <span class="ms-2">Layanan Catering</span>
                        </div>
                        <i class="fas fa-chevron-down text-sm me-1"></i>
                    </a>

                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('category.index') }}"
                               class="nav-link {{ request()->routeIs('category.index') ? 'submenu-active' : '' }}">
                                <p>Category</p>
                            </a>
                        </li>
                        @foreach($sidebarCategories as $cat)
                        <li class="nav-item">
                            <a href="{{ route('product.category', $cat->id_category) }}"
                               class="nav-link {{ request()->routeIs('product.category') && request()->segment(2) == $cat->id_category ? 'submenu-active' : '' }}">
                                <i class="far fa-circle nav-icon"></i>
                                <p>{{ $cat->name_category }}</p>
                            </a>
                        </li>
                        @endforeach
                    </ul>
                </li>

                <li class="nav-item">
                    <a href="{{ route('review.index') }}"
                       class="nav-link {{ request()->routeIs('review.index') ? 'menu-active' : '' }}">
                        <i class="nav-icon fas fa-comment-dots"></i>
                        <p> Review </p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>

    <!-- Visitor Tracking (Optional) -->
    <script>
        fetch("{{ route('track.visitor') }}", {
            method: "POST",
            headers: {
                "X-CSRF-TOKEN": "{{ csrf_token() }}",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        });
    </script>

    <!-- Sidebar State Save Script -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const body = document.body;
            const toggle = document.querySelector('[data-widget="pushmenu"]');

            // Restore saved state
            if (localStorage.getItem('sidebar') === 'collapsed') {
                body.classList.add('sidebar-collapse');
            }

            toggle?.addEventListener('click', () => {
                setTimeout(() => {
                    if (body.classList.contains('sidebar-collapse')) {
                        localStorage.setItem('sidebar', 'collapsed');
                    } else {
                        localStorage.setItem('sidebar', 'expanded');
                    }
                }, 300); // Give AdminLTE time to apply the class
            });
        });
    </script>

    <!-- Styling -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

        .main-sidebar {
            background-color: #f8f9fa;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
            border-right: 1px solid #e9ecef;
            font-family: 'Poppins', sans-serif;
        }

        .brand-link {
            background-color: #718E3F;
            color: white !important;
            font-weight: 600 !important;
            padding: 15px;
            text-align: center;
            border-bottom: 2px solid #5c7233;
        }

        .brand-link:hover {
            background-color: #637c35;
        }

        .brand-text {
            font-size: 20px;
        }

        .user-panel {
            background-color: #f0f3e0;
            border-radius: 10px;
            margin: 15px 10px;
            padding: 15px 5px !important;
        }

        .user-panel .image i {
            color: #718E3F !important;
        }

        .user-panel .info a {
            color: #4d5d2a !important;
            font-weight: 600;
            font-size: 15px;
        }

        .nav-sidebar .nav-link {
            color: #333 !important;
            border-radius: 8px;
            margin: 4px 4px;
            padding: 10px 15px;
            font-weight: 500;
        }

        .nav-sidebar .nav-link:hover {
            background-color: #e7edda;
            transform: translateX(3px);
        }

        .menu-active {
            background-color: #718E3F !important;
            color: white !important;
            box-shadow: 0 2px 5px rgba(113, 142, 63, 0.4);
        }

        .menu-active,
        .menu-active p,
        .menu-active i {
            color: white !important;
        }

        .nav-treeview {
            background-color: #f9f9f0;
            border-radius: 6px;
            margin-left: 15px;
            padding: 5px 0;
        }

        .nav-treeview .nav-link {
            font-size: 14px;
            padding: 8px 10px 8px 20px;
        }

        .submenu-active {
            background-color: #eaeed6 !important;
            color: #4d5d2a !important;
            border-left: 4px solid #718E3F;
            font-weight: 600;
        }

        .sidebar hr {
            border-color: rgba(113, 142, 63, 0.2);
            width: 85%;
            margin: 10px auto;
        }

        .nav-icon {
            color: #718E3F !important;
            margin-right: 8px;
        }

        .fa-angle-left {
            color: #718E3F !important;
        }

        .menu-active .nav-icon,
        .menu-active .fa-angle-left {
            color: white !important;
        }

        .sidebar {
            transition: all 0.3s ease-in-out;
        }

        .nav-header {
            color: #718E3F;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 12px;
            margin-top: 15px;
            padding-left: 15px;
        }
    </style>
</aside>