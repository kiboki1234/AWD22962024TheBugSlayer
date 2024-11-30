<?php require_once '../scriptsphp/validate_session.php'; ?>
<?php require_once '../scriptsphp/validate_roles.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>indexAdmin</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
<div class=" text-white text-center">
  <nav class="navbar navbar-expand-sm  bg-body-secondary">
    <div class="container">
    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 align-items-center">
        <li class="nav-item"><a href="./indexAdmin.php"><img src="../img/Imagen4.png" width="47" height="33" alt="Logo" class="d-inline-block align-text-top"/></a></li>
        <?php include_once './includes/navperfiles.php';?> 
        <!-- <li><a href="#" class="nav-link px-2 link-body-emphasis">Reportes</a></li>
        <li><a href="#" class="nav-link px-2 link-body-emphasis">Inventario</a></li>
        <li><a href="#" class="nav-link px-2 link-body-emphasis">Ventas</a></li>
        <li><a href="#" class="nav-link px-2 link-body-emphasis">Usuarios</a></li>
        <li><a href="#" class="nav-link px-2 link-body-emphasis">Clientes</a></li> -->
      </ul>
      <div class="dropdown">
        <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <?php include_once '../scriptsphp/additionalForms/usernameSession.php' ?>
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><?php include_once '../scriptsphp/additionalForms/logOutHref.php';?></li>
        </ul>
      </div>
    </div>
  </nav>
</div>