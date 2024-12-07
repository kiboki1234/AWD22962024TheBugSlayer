<?php
// login.php
session_start();  // Iniciar sesión para almacenar información del usuario

require_once './app/middleware/authenticationUsers.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $correo = $_POST['username'];
    $password = $_POST['passwordLogin'];

    $user = verifyUser($correo, $password, $pdo);

    if ($user) {
        echo "<script>alert('Inicio de sesión exitoso. Bienvenido, {$user['nombre']}');</script>";
        header('location: ./app/views/activity/index.php');
    } else {
        echo "<script>alert('Credenciales inválidas. Por favor, intenta de nuevo.');</script>";
        header('location: ./index.php');
    }
}
?>