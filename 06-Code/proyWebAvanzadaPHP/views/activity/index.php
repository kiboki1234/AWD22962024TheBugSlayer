<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Activity Tracking - CPED</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/activityStyles.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CPED</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Content -->
  <div class="container my-5">
    <h1 class="text-center mb-4">Activity Tracking</h1>

    <div class="row">
      <!-- Task Submission Form -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            Enviar Tarea
          </div>
          <div class="card-body">
            <form id="sendTaskForm">
              <div class="mb-3">
                <label for="taskTitle" class="form-label">Título de la Tarea</label>
                <input type="text" class="form-control" id="taskTitle" placeholder="Escribe el título de la tarea">
              </div>
              <div class="mb-3">
                <label for="taskDescription" class="form-label">Descripción</label>
                <textarea class="form-control" id="taskDescription" rows="4" placeholder="Detalles de la tarea"></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">Enviar</button>
            </form>
          </div>
        </div>
      </div>

      <!-- Received Tasks -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            Tareas Recibidas
          </div>
          <div class="card-body">
            <ul class="list-group" id="receivedTasks">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Preparar material para debate
                <span class="badge bg-primary">Pendiente</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Crear lista de participantes
                <span class="badge bg-success">Completada</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Enviar guías de trabajo
                <span class="badge bg-warning">En progreso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    document.getElementById('sendTaskForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const title = document.getElementById('taskTitle').value;
      const description = document.getElementById('taskDescription').value;

      if (title && description) {
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        taskItem.innerHTML = `${title} <span class="badge bg-primary">Pendiente</span>`;
        document.getElementById('receivedTasks').appendChild(taskItem);

        alert('Tarea enviada exitosamente');
        this.reset();
      } else {
        alert('Por favor, completa todos los campos');
      }
    });
  </script>
</body>
</html>
