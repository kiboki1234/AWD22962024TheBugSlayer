<?php
require_once '../config/config.php';

$idUsuario = $_POST['id_usuario'];

try {
    $query = "DELETE FROM usuarios WHERE id_usuario = :idUsuario";
    $stmt = $pdo->prepare($query);
    $stmt->execute([':idUsuario' => $idUsuario]);

    echo json_encode(['status' => 'success', 'message' => 'Usuario eliminado correctamente']);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Error al eliminar el usuario: ' . $e->getMessage()]);
}
?>
