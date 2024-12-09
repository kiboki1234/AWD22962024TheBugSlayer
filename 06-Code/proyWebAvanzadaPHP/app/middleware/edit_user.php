<?php
require_once '../config/config.php';

$idUsuario = $_POST['id_usuario'];
$nombre = $_POST['nombre'];
$cedula = $_POST['cedula'];
$idUniversitario = $_POST['id_universitario'];
$carrera = $_POST['carrera'];
$username = $_POST['username'];
$rol = $_POST['rol'];
$password = isset($_POST['password']) && !empty($_POST['password']) ? password_hash($_POST['password'], PASSWORD_BCRYPT) : null;

try {
    // Actualizar datos en la tabla miembros
    $queryMiembro = "UPDATE miembros m
                     SET m.nombre = :nombre, m.cedula = :cedula, m.id_universitario = :idUniversitario, m.carrera = :carrera
                     WHERE m.id_miembro = (SELECT u.id_miembro FROM usuarios u WHERE u.id_usuario = :idUsuario)";
    $stmtMiembro = $pdo->prepare($queryMiembro);
    $stmtMiembro->execute([
        ':nombre' => $nombre,
        ':cedula' => $cedula,
        ':idUniversitario' => $idUniversitario,
        ':carrera' => $carrera,
        ':idUsuario' => $idUsuario
    ]);

    // Actualizar datos en la tabla usuarios
    $queryUsuario = "UPDATE usuarios 
                     SET username = :username, rol = :rol" . ($password ? ", password = :password" : "") . " 
                     WHERE id_usuario = :idUsuario";
    $stmtUsuario = $pdo->prepare($queryUsuario);
    $params = [
        ':username' => $username,
        ':rol' => $rol,
        ':idUsuario' => $idUsuario
    ];
    if ($password) {
        $params[':password'] = $password;
    }
    $stmtUsuario->execute($params);

    echo json_encode(['status' => 'success', 'message' => 'Usuario actualizado correctamente']);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Error al actualizar el usuario: ' . $e->getMessage()]);
}
?>
