<?php
require_once('config.php');

$user = $_POST['username'];
$passwordLogin = $_POST['passwordLogin'];


$user = $conn->real_escape_string($user);
$passwordLogin = $conn->real_escape_string($passwordLogin);

$query = "SELECT u.id_usuario, u.username, u.passwordLogin, u.estado, r.nombre_rol, r.accesos as accesos FROM usuarios u left join roles r ON u.id_rol = r.id_rol WHERE username = '$user' AND passwordLogin = '$passwordLogin' AND estado = 'activo'";
$result = $conn->query($query);
//echo $accesos_usuario;
//print_r($result);

if($result->num_rows > 0) {
    $user_data = mysqli_fetch_assoc($result);
    $accesos_usuario = $user_data['accesos'];
    session_start();
    
    $_SESSION['user'] = $user_data['username'];
    $_SESSION['accesos_usuario'] = $accesos_usuario;
    
    header('location: ../php/indexAdmin.php');
} else {
    header('location: ../index.php');
}
?>
