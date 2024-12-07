<?php
session_start();

// Verifica si el usuario está autenticado
function verificarSesion() {
    if (!isset($_SESSION['usuario_id'])) {
        // Si no hay sesión, redirige al login
        header("Location: https://cped.alwaysdata.net/login.php");
        exit();
    }
}

// Verifica si el usuario tiene el rol correcto
function verificarRol($rolesPermitidos = []) {
    if (!isset($_SESSION['usuario_rol'])) {
        header("Location: ./login.php");
        exit();
    }

    // Si el rol del usuario no está permitido
    if (!in_array($_SESSION['usuario_rol'], $rolesPermitidos)) {
        header("Location: /app/views/activity/index.php");
        exit();
    }
}
?>
