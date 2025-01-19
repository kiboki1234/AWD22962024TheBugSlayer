<?php
// Conexión a la base de datos
require_once '../config/config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Activity Tracking - CPED</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/activityStyles.css">
  <link rel="stylesheet" href="../assets/css/sidebar.css">
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
  <!-- Navbar -->
  <?php include_once './sideNavBar.php'; ?>

  <!-- Contenido centrado -->
  <div class="container-fluid d-flex justify-content-center align-items-center vh-100">
    <div class="row w-100">
      <div class="col-12">
        <h1 class="text-center mb-4">Activity Tracking</h1>

        <div class="row justify-content-center">
          <!-- Formulario para asignar tarea -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">Asignar Tarea</div>
              <div class="card-body">
                <form id="assignTaskForm">
                  <div class="mb-3">
                    <label for="taskTitle" class="form-label">Título de la Tarea</label>
                    <input type="text" class="form-control" id="taskTitle" name="title" placeholder="Título de la tarea" required>
                  </div>
                  <div class="mb-3">
                    <label for="taskDescription" class="form-label">Descripción</label>
                    <textarea class="form-control" id="taskDescription" name="description" rows="3" placeholder="Detalles de la tarea" required></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="assignedTo" class="form-label">Asignar a</label>
                    <select class="form-select" id="assignedTo" name="assigned_to" required>
                      <option value="" selected disabled>Seleccione un usuario</option>
                      <?php
                      // Obtener usuarios desde la base de datos
                      $sql = "SELECT id_miembro, nombre FROM miembros";
                      $stmt = $pdo->query($sql);
                      while ($row = $stmt->fetch()) {
                        echo "<option value='{$row['id_miembro']}'>{$row['nombre']}</option>";
                      }
                      ?>
                    </select>
                  </div>
                  <button type="submit" class="btn btn-primary w-100">Asignar Tarea</button>
                </form>
              </div>
            </div>
          </div>

          <!-- Lista de tareas enviadas -->
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">Tareas Enviadas</div>
              <div class="card-body">
                <div id="taskTable">
                  <!-- Aquí se cargará dinámicamente la tabla de tareas -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script>
    $(document).ready(function () {
      // Cargar la tabla de tareas
      function loadTasks() {
        $.ajax({
          url: "../middleware/load_tasks.php",
          type: "GET",
          success: function (data) {
            $("#taskTable").html(data);
          },
          error: function () {
            alert("Error al cargar las tareas.");
          }
        });
      }

      // Cargar tareas al iniciar la página
      loadTasks();

      // Manejar el envío del formulario
      $("#assignTaskForm").on("submit", function (e) {
        e.preventDefault(); // Evitar recarga de la página
        const formData = $(this).serialize();

        $.ajax({
          url: "../middleware/assign_task.php",
          type: "POST",
          data: formData,
          success: function (response) {
            alert(response); // Mensaje de éxito
            loadTasks(); // Recargar la tabla de tareas
            $("#assignTaskForm")[0].reset(); // Limpiar el formulario
          },
          error: function () {
            alert("Error al asignar la tarea.");
          }
        });
      });
    });
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
