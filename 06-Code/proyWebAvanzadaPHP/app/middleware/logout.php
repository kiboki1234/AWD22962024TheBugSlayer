<?php
session_start();
session_unset(); // Eliminar todas las variables de sesión
session_destroy(); // Destruir la sesión
header("Location: https://cped.alwaysdata.net/login.php"); // Redirigir al login
exit();
?>