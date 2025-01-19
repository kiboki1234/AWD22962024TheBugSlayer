<?php
require_once '../config/config.php';

$sql = "SELECT t.id_tarea, t.titulo, t.estado, m.nombre AS asignado_a
        FROM tareas t
        JOIN miembros m ON t.id_receptor = m.id_miembro";
$stmt = $pdo->query($sql);

echo '<table class="table table-striped">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Asignado a</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>';

while ($task = $stmt->fetch()) {
    echo "
    <tr>
      <td>{$task['titulo']}</td>
      <td>{$task['asignado_a']}</td>
      <td><span class='badge bg-" . ($task['estado'] === 'Completada' ? 'success' : 'warning') . "'>{$task['estado']}</span></td>
      <td>
        " . ($task['estado'] === 'Completada' ? "<button class='btn btn-primary btn-sm'>Revisar</button>" : "-") . "
      </td>
    </tr>";
}

echo '</tbody></table>';
?>
