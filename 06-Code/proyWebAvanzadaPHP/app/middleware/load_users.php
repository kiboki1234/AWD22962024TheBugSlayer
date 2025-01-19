<?php
require_once '../config/config.php';

try {
    $sql = "SELECT u.id_usuario, m.nombre, m.cedula, m.id_universitario, m.carrera, u.username, r.nombre AS rol 
            FROM usuarios u
            JOIN miembros m ON u.id_miembro = m.id_miembro
            JOIN roles r ON CAST(u.rol AS INTEGER) = r.id";
    $stmt = $pdo->query($sql);

    while ($user = $stmt->fetch()) {
        echo "
        <tr>
            <td>{$user['id_usuario']}</td>
            <td>{$user['nombre']}</td>
            <td>{$user['cedula']}</td>
            <td>{$user['id_universitario']}</td>
            <td>{$user['carrera']}</td>
            <td>{$user['username']}</td>
            <td>{$user['rol']}</td>
        </tr>";
    }
} catch (PDOException $e) {
    echo "<tr><td colspan='7'>Error al cargar usuarios: " . $e->getMessage() . "</td></tr>";
}
?>
