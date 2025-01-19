<?php
// login.php
session_start(); // Iniciar sesión para almacenar información del usuario


require_once './app/middleware/authenticationUsers.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username']; // Asegúrate de que este campo coincida con el formulario
    $password = $_POST['passwordLogin']; // Asegúrate de que este campo coincida con el formulario

    // Verificar las credenciales del usuario
    $user = verifyUser($username, $password, $pdo);

    if ($user) {
        // Almacenar los datos del usuario en la sesión
        $_SESSION['usuario_id'] = $user['id_usuario'];
        $_SESSION['usuario_rol'] = $user['id_rol'];
        $_SESSION['usuario_nombre'] = $user['nombre_miembro'];
        $_SESSION['usuario_rol_nombre'] = $user['nombre_rol'];

        // Redirección a la página principal del sistema
        header("Location: ./app/activity/index.php");
        exit();
    } else {
        // Mostrar alerta de credenciales inválidas y redirigir al login
        header('Location: ./login.php?status=error');
        exit();
    }
}
?>
