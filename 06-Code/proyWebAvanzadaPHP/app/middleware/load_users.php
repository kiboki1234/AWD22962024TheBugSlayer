<?php
require_once '../config/config.php';

try {
    $sql = "SELECT u.id_usuario, m.nombre, u.username, r.nombre AS rol 
            FROM usuarios u
            JOIN miembros m ON u.id_miembro = m.id_miembro
            JOIN roles r ON CAST(u.rol AS INTEGER) = r.id";
    $stmt = $pdo->query($sql);

    while ($user = $stmt->fetch()) {
        echo "
        <tr>
            <td>{$user['id_usuario']}</td>
            <td>{$user['nombre']}</td>
            <td>{$user['username']}</td>
            <td>{$user['rol']}</td>
            <td>
                <button class='btn btn-warning btn-sm' data-bs-toggle='modal' data-bs-target='#editUserModal' 
                        data-id='{$user['id_usuario']}' 
                        data-name='{$user['nombre']}'
                        data-username='{$user['username']}'
                        data-rol='{$user['rol']}'>Editar</button>
                <button class='btn btn-danger btn-sm' onclick='deleteUser({$user['id_usuario']})'>Eliminar</button>
            </td>
        </tr>";
    }
} catch (PDOException $e) {
    echo "<tr><td colspan='5'>Error al cargar usuarios: " . $e->getMessage() . "</td></tr>";
}
?>
