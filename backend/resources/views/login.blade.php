<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dandanggulo | Login</title>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/css/adminlte.min.css">

  <style>
    :root {
      --primary-color: #355E3B;
      --secondary-color: #6B8E23;
      --accent-color: #8B6B4C;
      --background-color: #F3EBDD;
      --card-color: #FFFFFF;
      --text-color: #333333;
    }
    
    body {
      background: var(--background-color) url('/api/placeholder/1920/1080') no-repeat center center fixed;
      background-size: cover;
      font-family: 'Source Sans Pro', sans-serif;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    body::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(107, 142, 35, 0.7) 0%, rgba(53, 94, 59, 0.8) 100%);
      z-index: -1;
    }
    
    .login-box {
      width: 400px;
      margin: 0 auto;
      z-index: 10;
    }
    
    .login-logo {
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .login-logo a {
      color: white;
      font-size: 42px;
      font-weight: 700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .card {
      border-radius: 20px;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
      border: none;
      overflow: hidden;
      background-color: var(--card-color);
      backdrop-filter: blur(10px);
    }
    
    .card-header {
      border-bottom: none;
      padding: 1.5rem 1.5rem 0.5rem;
      background-color: transparent;
    }
    
    .card-body {
      padding: 1.5rem;
    }
    
    .login-box-msg {
      color: var(--accent-color);
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    
    .input-group {
      margin-bottom: 1.5rem;
    }
    
    .form-control {
      border-radius: 10px;
      padding: 12px;
      height: auto;
      border: 1px solid #e4e4e4;
      transition: all 0.3s ease;
    }
    
    .form-control:focus {
      border-color: var(--secondary-color);
      box-shadow: 0 0 0 0.2rem rgba(107, 142, 35, 0.25);
    }
    
    .input-group-text {
      border-radius: 10px;
      background-color: #f8f9fa;
      border: 1px solid #e4e4e4;
      color: var(--primary-color);
    }
    
    .btn-success {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);
      border-radius: 10px;
      padding: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }
    
    .btn-success:hover {
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(107, 142, 35, 0.4);
    }
    
    .icheck-primary label {
      color: var(--text-color);
      font-weight: 400;
    }
    
    .icheck-primary input:checked + label::before {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);
    }
    
    .alert-danger {
      border-radius: 10px;
       background-color: #fff5f5;
       border-left: 4px solid #dc3545;
       padding: 1rem;
       margin-bottom: 1.5rem;
       color: #721c24; /* <<< Tambahkan ini */
      }

    
    .alert-danger ul {
      margin-bottom: 0;
      padding-left: 1rem;
    }
    
    .social-auth-links {
      margin: 1.5rem 0;
      text-align: center;
    }
    
    .login-footer {
      margin-top: 2rem;
      text-align: center;
      color: #FFFFFF;
      font-size: 14px;
    }
    
    .login-footer a {
      color: #FFFFFF;
      font-weight: 600;
    }
    
    .floating-shapes div {
      position: absolute;
      border-radius: 50%;
      opacity: 0.1;
      background: white;
      animation: float 15s infinite linear;
    }
    
    .shape1 {
      width: 100px;
      height: 100px;
      left: 10%;
      top: 20%;
      animation-delay: 0s;
    }
    
    .shape2 {
      width: 150px;
      height: 150px;
      right: 15%;
      top: 10%;
      animation-delay: 2s;
    }
    
    .shape3 {
      width: 70px;
      height: 70px;
      left: 20%;
      bottom: 15%;
      animation-delay: 4s;
    }
    
    .shape4 {
      width: 120px;
      height: 120px;
      right: 20%;
      bottom: 20%;
      animation-delay: 6s;
    }
    
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
      100% { transform: translateY(0) rotate(360deg); }
    }
  </style>
</head>

<body class="hold-transition login-page">
  <div class="floating-shapes">
    <div class="shape1"></div>
    <div class="shape2"></div>
    <div class="shape3"></div>
    <div class="shape4"></div>
  </div>

  <div class="login-box">
    <div class="login-logo">
      <a href="{{ url('/') }}"><b>Dandanggulo</b></a>
    </div>
    
    <div class="card">
      <div class="card-body">
        <p class="login-box-msg">Welcome Back! Please sign in</p>

        <!-- Error container -->
        <div id="error-container" style="display: none;">
          <div class="alert alert-danger">
            <ul id="error-list"></ul>
          </div>
        </div>

        <form action="{{ route('login.process') }}" method="POST" id="login-form">
          @csrf
          <div class="input-group">
            <input type="text" class="form-control" name="username" placeholder="Username" required>
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
          </div>
          
          <div class="input-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required>
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember" name="remember">
                <label for="remember">Remember Me</label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-success btn-block">
                <i class="fas fa-sign-in-alt mr-2"></i> Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
    <div class="login-footer">
      <p>&copy; 2025 Dandanggulo. All rights reserved.</p>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.bundle.min.js"></script>

  <script>
    $(document).ready(function() {
      // Error handling dari Laravel
      const errors = {!! json_encode($errors->all()) !!};
      
      if (errors.length > 0) {
        const errorList = $('#error-list');
        errors.forEach(error => {
          errorList.append(`<li>${error}</li>`);
        });
        $('#error-container').show();
      }

      // Input field animation
      $('.form-control').focus(function() {
        $(this).parent().addClass('input-focused');
      }).blur(function() {
        if ($(this).val() === '') {
          $(this).parent().removeClass('input-focused');
        }
      });
    });
  </script>
</body>
</html>
