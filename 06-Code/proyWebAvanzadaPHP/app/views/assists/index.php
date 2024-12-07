<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de Asistencia</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/assistStyles.css">
</head>
<body>
    <div class="header">
        <h1>Listado de Asistencia</h1>
    </div>
    <div class="container mt-4">
        <!-- Filtro de búsqueda -->
        <div class="card mb-4">
            <div class="card-header">Buscar Asistencias</div>
            <div class="card-body">
                <form method="GET" action="">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="searchName" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="searchName" name="name" placeholder="Buscar por nombre">
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="searchDate" class="form-label">Fecha</label>
                            <input type="date" class="form-control" id="searchDate" name="date">
                        </div>
                        <div class="col-md-4 d-flex align-items-end">
                            <button type="submit" class="btn btn-primary">Filtrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Tabla de Asistencias -->
        <div class="card">
            <div class="card-header">Registros de Asistencia</div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Asistencia</th>
                            <th>Faltas</th>
                            <th>Faltas Justificadas</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        // Simulación de datos (Esto debe ser reemplazado por datos de la BD)
                        $asistencias = [
                            ['name' => 'Carlos Ramírez', 'date' => '2024-11-20', 'attendance' => 'Presente', 'absences' => 0, 'justified' => 0],
                            ['name' => 'María López', 'date' => '2024-11-20', 'attendance' => 'Ausente', 'absences' => 1, 'justified' => 0],
                            ['name' => 'Ana Torres', 'date' => '2024-11-19', 'attendance' => 'Justificada', 'absences' => 0, 'justified' => 1]
                        ];

                        // Generar filas
                        foreach ($asistencias as $registro) {
                            echo "<tr>";
                            echo "<td>{$registro['name']}</td>";
                            echo "<td>{$registro['date']}</td>";
                            echo "<td>{$registro['attendance']}</td>";
                            echo "<td>{$registro['absences']}</td>";
                            echo "<td>{$registro['justified']}</td>";
                            echo '<td>
                                    <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Editar</button>
                                  </td>';
                            echo "</tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Modal de edición -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Editar Registro</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="editForm">
                        <div class="mb-3">
                            <label for="editAttendance" class="form-label">Estado</label>
                            <select class="form-select" id="editAttendance">
                                <option value="Presente">Presente</option>
                                <option value="Ausente">Ausente</option>
                                <option value="Justificada">Justificada</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="editNotes" class="form-label">Notas</label>
                            <textarea class="form-control" id="editNotes" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
