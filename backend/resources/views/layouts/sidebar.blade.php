<aside class="main-sidebar sidebar-light-primary elevation-4">
    <a href="#" class="brand-link">
        <span class="brand-text font-weight-light"><b>Admin Panel</b></span>
    </a>
    <div class="sidebar">
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
                        <p> Management User </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('gallery.index') }}" class="nav-link {{ request()->routeIs('gallery.index') ? 'bg-success' : '' }}">
                        <i class="nav-icon fas fa-images"></i>
                        <p> Gallery </p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>