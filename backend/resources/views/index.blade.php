<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{ asset('template/plugins/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('template/dist/css/adminlte.min.css?v=3.2.0') }}">
    <style>
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
    </style>
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">

    @include('layouts.navbar')
    @include('layouts.sidebar')

    <div class="content-wrapper">
        <div class="content">
            <div class="container-fluid">
                <div class="welcome-message py-4 px-3">
                    <h2 class="font-weight-bold">
                        Selamat datang, {{ Auth::user()->name ?? 'User' }}!
                        <i class="fas fa-smile-beam mr-2"></i>
                    </h2>
                    <p>Selamat bekerja</p>
                    <p>Semoga harimu menyenangkan 😊</p>
                </div>
            </div>
        </div>
    </div>

</div>

<script src="{{ asset('template/plugins/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('template/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('template/dist/js/adminlte.min.js?v=3.2.0') }}"></script>
</body>
</html>
