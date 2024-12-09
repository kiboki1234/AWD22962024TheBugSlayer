<?php
// Conexión a la base de datos
require_once '../config/config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Administrar Usuarios</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/activityStyles.css">
  <link rel="stylesheet" href="../assets/css/sidebar.css">
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
  <?php include_once './sideNavBar.php'; ?>

  <div class="container mt-5">
    <h1 class="text-center mb-4">Lista de Usuarios</h1>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>ID Universitario</th>
            <th>Carrera</th>
            <th>Usuario</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody id="userTableBody">
          <!-- Datos cargados dinámicamente -->
        </tbody>
      </table>
    </div>
  </div>

  <script>
    // Función para cargar usuarios
    function loadUsers() {
      $.ajax({
        url: '../middleware/load_users.php',
        type: 'GET',
        success: function (data) {
          $('#userTableBody').html(data); // Renderiza los datos recibidos en la tabla
        },
        error: function () {
          alert('Error al cargar los usuarios.');
        }
      });
    }

    $(document).ready(function () {
      loadUsers(); // Carga los usuarios al iniciar la página
    });
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
