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
    <h1 class="text-center mb-4">Administrar Usuarios</h1>

    <div class="mb-3 text-end">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">Agregar Usuario</button>
    </div>

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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="userTableBody">
          <!-- Datos cargados dinámicamente -->
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal: Agregar Usuario -->
  <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="addUserForm">
          <div class="modal-header">
            <h5 class="modal-title">Agregar Usuario</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="nombre" name="nombre" required>
            </div>
            <div class="mb-3">
              <label for="cedula" class="form-label">Cédula</label>
              <input type="text" class="form-control" id="cedula" name="cedula" required>
            </div>
            <div class="mb-3">
              <label for="idUniversitario" class="form-label">ID Universitario</label>
              <input type="text" class="form-control" id="idUniversitario" name="id_universitario" required>
            </div>
            <div class="mb-3">
              <label for="carrera" class="form-label">Carrera</label>
              <input type="text" class="form-control" id="carrera" name="carrera" required>
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">Usuario</label>
              <input type="text" class="form-control" id="username" name="username" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <div class="mb-3">
              <label for="rol" class="form-label">Rol</label>
              <select class="form-select" id="rol" name="rol" required>
                <option value="" disabled selected>Seleccione un rol</option>
                <option value="1">Presidente</option>
                <option value="2">Vicepresidente</option>
                <option value="3">Coordinador Estratégico</option>
                <option value="4">Líder de Área</option>
                <option value="5">Miembro</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Modal: Editar Usuario -->
  <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form id="editUserForm">
          <div class="modal-header">
            <h5 class="modal-title">Editar Usuario</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="hidden" id="editIdUsuario" name="id_usuario">
            <div class="mb-3">
              <label for="editNombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="editNombre" name="nombre" required>
            </div>
            <div class="mb-3">
              <label for="editCedula" class="form-label">Cédula</label>
              <input type="text" class="form-control" id="editCedula" name="cedula" required>
            </div>
            <div class="mb-3">
              <label for="editIdUniversitario" class="form-label">ID Universitario</label>
              <input type="text" class="form-control" id="editIdUniversitario" name="id_universitario" required>
            </div>
            <div class="mb-3">
              <label for="editCarrera" class="form-label">Carrera</label>
              <input type="text" class="form-control" id="editCarrera" name="carrera" required>
            </div>
            <div class="mb-3">
              <label for="editUsername" class="form-label">Usuario</label>
              <input type="text" class="form-control" id="editUsername" name="username" required>
            </div>
            <div class="mb-3">
              <label for="editPassword" class="form-label">Nueva Contraseña (opcional)</label>
              <input type="password" class="form-control" id="editPassword" name="password">
            </div>
            <div class="mb-3">
              <label for="editRol" class="form-label">Rol</label>
              <select class="form-select" id="editRol" name="rol" required>
                <option value="" disabled>Seleccione un rol</option>
                <option value="1">Presidente</option>
                <option value="2">Vicepresidente</option>
                <option value="3">Coordinador Estratégico</option>
                <option value="4">Líder de Área</option>
                <option value="5">Miembro</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script>
    function loadUsers() {
      $.ajax({
        url: '../middleware/load_users.php',
        type: 'GET',
        success: function (data) {
          $('#userTableBody').html(data);
        },
        error: function () {
          alert('Error al cargar los usuarios.');
        }
      });
    }

    $(document).ready(function () {
      loadUsers();

      // Agregar Usuario
      $('#addUserForm').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
          url: '../middleware/add_user.php',
          type: 'POST',
          data: $(this).serialize(),
          success: function (response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
              $('#addUserModal').modal('hide');
              loadUsers();
              alert(res.message);
            } else {
              alert(res.message);
            }
          },
          error: function () {
            alert('Error al agregar el usuario.');
          }
        });
      });

      // Editar Usuario
      $('#editUserForm').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
          url: '../middleware/edit_user.php',
          type: 'POST',
          data: $(this).serialize(),
          success: function (response) {
            const res = JSON.parse(response);
            if (res.status === 'success') {
              $('#editUserModal').modal('hide');
              loadUsers();
              alert(res.message);
            } else {
              alert(res.message);
            }
          },
          error: function () {
            alert('Error al editar el usuario.');
          }
        });
      });

      // Cargar datos en modal de edición
      $('#editUserModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const user = button.data();
        $('#editIdUsuario').val(user.id_usuario);
        $('#editNombre').val(user.nombre);
        $('#editCedula').val(user.cedula);
        $('#editIdUniversitario').val(user.id_universitario);
        $('#editCarrera').val(user.carrera);
        $('#editUsername').val(user.username);
        $('#editRol').val(user.rol);
      });
    });
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
