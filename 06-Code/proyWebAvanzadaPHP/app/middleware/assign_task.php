<?php
require_once '../config/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'] ?? '';
    $description = $_POST['description'] ?? '';
    $assignedTo = $_POST['assigned_to'] ?? '';

    if (empty($title) || empty($description) || empty($assignedTo)) {
        echo "Todos los campos son obligatorios.";
        exit();
    }

    try {
        $assignerId = 2; // Cambia este ID según la lógica de tu sistema

        $sql = "INSERT INTO tareas (titulo, descripcion, estado, id_asignador, id_receptor, fecha_asignacion)
                VALUES (:title, :description, 'Pendiente', :assigner, :receptor, NOW())";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':assigner', $assignerId);
        $stmt->bindParam(':receptor', $assignedTo);
        $stmt->execute();

        echo "Tarea asignada con éxito.";
    } catch (PDOException $e) {
        echo "Error al asignar la tarea: " . $e->getMessage();
    }
} else {
    echo "Método no permitido.";
}
