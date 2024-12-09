<?php
require_once '../middleware/authMiddleWare.php';
verificarSesion();
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
</head>
<body>
   <!-- Navbar -->
   <?php  include_once '../layouts/navbar.php'; ?>
   
  <!-- Page Content -->
  <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-2 ">
                <?php include_once './sideNavBar.php'; ?>
            </div>
            <div class="col-10">
                <h1 class="text-center mb-4">Activity Tracking</h1>
                <div class="row">
                    <!-- Sent Tasks -->
                    <div class="col">
                        <!-- Assign Task Section -->
                        <div class="card">
                                <div class="card-header">Asignar Tarea</div>
                                <div class="card-body">
                                    <form method="POST" action="assign_task.php">
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
                                        // Simulación de usuarios disponibles desde la base de datos
                                        $users = [
                                            ['id' => 1, 'name' => 'Carlos Ramírez'],
                                            ['id' => 2, 'name' => 'María López'],
                                            ['id' => 3, 'name' => 'Ana Torres']
                                        ];
                                        foreach ($users as $user) {
                                            echo "<option value='{$user['id']}'>{$user['name']}</option>";
                                        }
                                        ?>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Asignar Tarea</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            
                            <div class="card-header">Tareas Enviadas</div>
                            <div class="card-body">
                                <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th>Tarea</th>
                                    <th>Asignado a</th>
                                    <th>Estado</th>
                                    <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    // Simulación de tareas enviadas desde la base de datos
                                    $sentTasks = [
                                    ['id' => 1, 'title' => 'Preparar material', 'assignedTo' => 'Carlos Ramírez', 'status' => 'Completada'],
                                    ['id' => 2, 'title' => 'Enviar guías', 'assignedTo' => 'María López', 'status' => 'Pendiente']
                                    ];
                                    foreach ($sentTasks as $task) {
                                    echo "
                                        <tr>
                                        <td>{$task['title']}</td>
                                        <td>{$task['assignedTo']}</td>
                                        <td><span class='badge bg-" . ($task['status'] === 'Completada' ? 'success' : 'warning') . "'>{$task['status']}</span></td>
                                        <td>
                                            " . ($task['status'] === 'Completada' ? "<button class='btn btn-primary btn-sm' data-bs-toggle='modal' data-bs-target='#reviewModal' data-task-id='{$task['id']}'>Revisar</button>" : "") . "
                                        </td>
                                        </tr>";
                                    }
                                    ?>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <div class="card-header">Tareas Recibidas</div>
                        <div class="card-body">
                            <table class="table table-striped">
                            <thead>
                                <tr>
                                <th>Tarea</th>
                                <th>Estado</th>
                                <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                // Simulación de tareas recibidas desde la base de datos
                                $receivedTasks = [
                                ['id' => 1, 'title' => 'Preparar material', 'status' => 'Pendiente'],
                                ['id' => 2, 'title' => 'Enviar guías', 'status' => 'En progreso']
                                ];
                                foreach ($receivedTasks as $task) {
                                echo "
                                    <tr>
                                    <td>{$task['title']}</td>
                                    <td>
                                        <form method='POST' action='update_task_status.php'>
                                        <input type='hidden' name='taskId' value='{$task['id']}'>
                                        <select class='form-select form-select-sm' name='status' onchange='this.form.submit()'>
                                            <option value='Pendiente' " . ($task['status'] === 'Pendiente' ? 'selected' : '') . ">Pendiente</option>
                                            <option value='En progreso' " . ($task['status'] === 'En progreso' ? 'selected' : '') . ">En progreso</option>
                                            <option value='Completada' " . ($task['status'] === 'Completada' ? 'selected' : '') . ">Completada</option>
                                        </select>
                                        </form>
                                    </td>
                                    <td>-</td>
                                    </tr>";
                                }
                                ?>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

  <!-- Review Modal -->
  <div class="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="reviewModalLabel">Revisar Tarea</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form method="POST" action="review_task.php">
          <div class="modal-body">
            <input type="hidden" id="modalTaskId" name="taskId">
            <p id="modalTaskDetails"></p>
            <div class="mb-3">
              <label for="taskScore" class="form-label">Puntaje</label>
              <input type="number" class="form-control" id="taskScore" name="score" min="0" max="100" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <script src="../assets/js/menu.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
