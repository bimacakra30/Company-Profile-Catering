<aside class="main-sidebar sidebar-light-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link text-center">
        <span class="brand-text font-weight-light"><b>Admin Panel</b></span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
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
                    <a href="{{ route('dashboard') }}" class="nav-link {{ request()->routeIs('dashboard') ? 'menu-active' : '' }}">
                        <i class="nav-icon fas fa-home"></i>
                        <p> Dashboard </p>
                    </a>
                </li>

                @if(Auth::user()->level === 'Owner')
                <li class="nav-item">
                    <a href="{{ route('users.index') }}" class="nav-link {{ request()->routeIs('users.index') ? 'menu-active' : '' }}">
                        <i class="nav-icon fas fa-user"></i>
                        <p> User Management </p>
                    </a>
                </li>
                @endif

                <li class="nav-item">
                    <a href="{{ route('gallery.index') }}" class="nav-link {{ request()->routeIs('gallery.index') ? 'menu-active' : '' }}">
                        <i class="nav-icon fas fa-images"></i>
                        <p> Gallery </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ route('portfolio.index') }}" class="nav-link {{ request()->routeIs('portfolio.index') ? 'menu-active' : '' }}">
                        <i class="fas fa-archive nav-icon"></i>
                        <p> Portfolio </p>
                    </a>
                </li>

                <li class="nav-item menu-open">
                <a href="#" class="nav-link {{ request()->is('paket-*') ? 'menu-active' : '' }}">
                    <i class="nav-icon fas fa-utensils"></i>
                    <i class="right fas fa-angle-left"></i>
                    <p> Layanan Catering </p>
                </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('paket.prasmanan') }}" class="nav-link {{ request()->routeIs('paket.prasmanan') ? 'submenu-active' : '' }}">
                                <p>Paket Prasmanan</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('paket.nasi-box') }}" class="nav-link {{ request()->routeIs('paket.nasi-box') ? 'submenu-active' : '' }}">
                                <p>Paket Nasi Box</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('paket.snack') }}" class="nav-link {{ request()->routeIs('paket.snack') ? 'submenu-active' : '' }}">
                                <p>Paket Snack</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('paket.hampers') }}" class="nav-link {{ request()->routeIs('paket.hampers') ? 'submenu-active' : '' }}">
                                <p>Paket Hampers</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('produk.lain') }}" class="nav-link {{ request()->routeIs('produk.lain') ? 'submenu-active' : '' }}">
                                <p>Produk Lain</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    body {
        font-family: 'Poppins', sans-serif;
    }

    .main-sidebar {
        background: linear-gradient(180deg, #1f1c2c, #928dab);
        color: white;
    }

    .brand-link {
        background-color: #f4f6f9;
        color: #4a4a4a;
        font-size: 18px;
        font-weight: 600;
        padding: 1rem;
    }

    .user-panel .info a {
        font-size: 16px;
        color: white;
        text-decoration: none;
    }

    .nav-sidebar .nav-link {
        font-size: 15px;
        font-weight: 500;
        color: #ffffff;
        border-radius: 8px;
        margin: 5px 10px;
        padding: 10px;
        transition: 0.3s;
    }

    .nav-sidebar .nav-link:hover {
        opacity: 0.9;
        transform: scale(1.02);
    }

    .menu-active {
        background-color: #28a745 !important; /* hijau */
        color: white !important;
        font-weight: 600;
    }

    .menu-active .nav-icon {
        color: white;
    }

    .submenu-disabled {
        background-color: rgba(255, 255, 255, 0.05);
        color: #d0d0d0 !important;
        pointer-events: none;
    }

    .submenu-active {
        background-color: #ffc107 !important; /* kuning */
        color: #343a40 !important;
        font-weight: 600;
        border-radius: 8px;
        margin: 5px 15px;
        text-align: center;
    }

    .submenu-active p {
        margin: 0;
    }

    .nav-icon {
        color: white;
        font-size: 18px;
        margin-right: 5px;
    }
    </style>
</aside>