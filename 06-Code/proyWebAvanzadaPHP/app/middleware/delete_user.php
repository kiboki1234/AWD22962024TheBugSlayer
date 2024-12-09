<?php
require_once '../config/config.php';

$idUsuario = $_POST['id_usuario'];

$query = "DELETE FROM usuarios WHERE id_usuario = $idUsuario";

if ($conn->query($query)) {
    echo json_encode(['status' => 'success', 'message' => 'Usuario eliminado correctamente']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error al eliminar el usuario']);
}
?>
