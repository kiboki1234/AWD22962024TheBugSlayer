<?php
require_once '../config/config.php';

$nombre = $_POST['nombre'];
$cedula = $_POST['cedula'];
$idUniversitario = $_POST['id_universitario'];
$carrera = $_POST['carrera'];
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);
$rol = $_POST['rol'];

try {
    // Primero inserta en miembros
    $queryMiembro = "INSERT INTO miembros (nombre, cedula, id_universitario, carrera) VALUES (:nombre, :cedula, :idUniversitario, :carrera)";
    $stmtMiembro = $conn->prepare($queryMiembro);
    $stmtMiembro->execute([
        ':nombre' => $nombre,
        ':cedula' => $cedula,
        ':idUniversitario' => $idUniversitario,
        ':carrera' => $carrera
    ]);
    $idMiembro = $conn->lastInsertId();

    // Luego inserta en usuarios
    $queryUsuario = "INSERT INTO usuarios (id_miembro, username, password, rol) VALUES (:idMiembro, :username, :password, :rol)";
    $stmtUsuario = $conn->prepare($queryUsuario);
    $stmtUsuario->execute([
        ':idMiembro' => $idMiembro,
        ':username' => $username,
        ':password' => $password,
        ':rol' => $rol
    ]);

    echo json_encode(['status' => 'success', 'message' => 'Usuario agregado correctamente']);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Error al agregar el usuario: ' . $e->getMessage()]);
}
?>
