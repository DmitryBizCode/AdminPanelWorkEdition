<?php ?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Панель администратора</title>
  <!-- CSS -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="dist/css/adminlte.min.css" />
  <!-- Google Fonts (опционально) -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">

  <!-- Навигационная панель -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Кнопка сворачивания бокового меню -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Главная</a>
      </li>
    </ul>
  </nav>

  <!-- Боковая панель -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="#" class="brand-link">
      <span class="brand-text font-weight-light">AdminLTE Панель</span>
    </a>

    <div class="sidebar">
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Дашборд</p>
            </a>
          </li>
          <!-- Добавь свои пункты меню здесь -->
        </ul>
      </nav>
    </div>
  </aside>

  <!-- Основной контент -->
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <h1 class="m-0 text-dark">Добро пожаловать в админку</h1>
      </div>
    </div>

    <section class="content">
      <div class="container-fluid">
        <!-- Здесь можно вставить виджеты, карточки и прочий контент -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Пример карточки</h3>
          </div>
          <div class="card-body">
            Контент карточки здесь.
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Подвал -->
  <footer class="main-footer">
    <strong>&copy; 2025 <a href="#">Ваша компания</a>.</strong> Все права защищены.
  </footer>

</div>

<!-- JS -->
<script src="plugins/jquery/jquery.min.js"></script>
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="dist/js/adminlte.min.js"></script>
</body>
</html>