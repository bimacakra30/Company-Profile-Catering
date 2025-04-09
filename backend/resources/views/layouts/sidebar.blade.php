<aside class="main-sidebar sidebar-light-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
        <span class="brand-text font-weight-light"><b>Admin Panel</b></span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex flex-column align-items-center text-center">
            <div class="image mb-2">
                <i class="fas fa-user-tie fa-3x"></i>
            </div>
            <div class="info">
                <a href="#" class="d-block">{{ Auth::user()->name }}</a>
            </div>
        </div>



        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a href="{{ route('dashboard') }}" class="nav-link {{ request()->routeIs('dashboard') ? 'bg-success' : '' }}">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p> Dashboard </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('users.index') }}" class="nav-link {{ request()->routeIs('users.index') ? 'bg-success' : '' }}">
                        <i class="nav-icon fas fa-user"></i>
                        <p> User Management </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('gallery.index') }}" class="nav-link {{ request()->routeIs('gallery.index') ? 'bg-success' : '' }}">
                        <i class="nav-icon fas fa-images"></i>
                        <p> Gallery </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('portfolio.index') }}" class="nav-link {{ request()->routeIs('portfolio.index') ? 'bg-success' : '' }}">
                        <i class="fas fa-archive nav-icon"></i>
                        <p> Portfolio </p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>