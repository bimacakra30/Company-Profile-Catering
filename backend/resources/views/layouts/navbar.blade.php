<!-- NAVBAR HTML -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button">
                <i class="fas fa-bars"></i>
            </a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <span class="navbar-brand">Catering Admin</span>
        </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
    
        <!-- Logout Button -->
        <li class="nav-item">
            <form action="{{ route('logout') }}" method="POST" style="display: inline;">
                @csrf
                <button type="submit" class="nav-link btn btn-danger text-white">
                    <i class="fas fa-sign-out-alt mr-1"></i> Logout
                </button>
            </form>
        </li>
    </ul>
</nav>

<!-- NAVBAR CSS -->
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

    /* Main Navbar Styling */
    .main-header {
        font-family: 'Poppins', sans-serif;
    }

    .main-header.navbar {
        background-color: #ffffff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        padding: 0.5rem 1.5rem;
        border-bottom: 2px solid #f0f3e0;
        height: 60px;
    }

    /* Sidebar toggle button */
    .main-header .nav-link[data-widget="pushmenu"] {
        color: #718E3F !important;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        margin-right: 10px;
    }

    .main-header .nav-link[data-widget="pushmenu"]:hover {
        background-color: #f0f3e0;
        transform: scale(1.05);
    }

    .main-header .nav-link[data-widget="pushmenu"] i {
        font-size: 18px;
    }

    /* Logout button styling */
    .main-header .btn-danger {
        background-color: #718E3F !important;
        border-color: #637c35 !important;
        border-radius: 6px;
        padding: 8px 18px;
        font-weight: 500;
        letter-spacing: 0.3px;
        box-shadow: 0 2px 4px rgba(113, 142, 63, 0.3);
        transition: all 0.3s ease;
    }

    .main-header .btn-danger:hover {
        background-color: #637c35 !important;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(113, 142, 63, 0.4);
    }

    /* Navbar brand/title */
    .navbar-brand {
        color: #718E3F !important;
        font-weight: 600;
        font-size: 18px;
        margin-right: 20px;
    }

    /* Badge styling */
    .navbar-badge {
        background-color: #FFC107;
        border-radius: 50%;
        font-size: 10px;
        padding: 3px 5px;
        position: absolute;
        top: 5px;
        right: 3px;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .main-header.navbar {
            padding: 0.5rem 1rem;
        }
        
        .main-header .btn-danger {
            padding: 6px 12px;
            font-size: 14px;
        }
    }

    /* Dropdown menu styling */
    .dropdown-menu {
        border: none;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .dropdown-item:hover {
        background-color: #f0f3e0;
        color: #718E3F;
    }

    /* Extra touches for navbar items */
    .navbar-nav .nav-item {
        display: flex;
        align-items: center;
        margin-right: 5px;
    }

    /* Add subtle hover effect to all nav links */
    .navbar-nav .nav-link:not(.btn) {
        color: #495057;
        transition: all 0.2s ease;
    }

    .navbar-nav .nav-link:not(.btn):hover {
        color: #718E3F;
    }
</style>