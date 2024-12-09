<?php 
include_once '../app/config/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Preparar la consulta SQL
    $sql = "INSERT INTO contactos (nombre, telefono, mensaje) VALUES (:name, :phone, :message)";
    $stmt = $pdo->prepare($sql);

    // Vincular los parámetros
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':message', $message);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        //echo "Mensaje enviado con éxito.";
        header('Location: ../contacts.php?status=success');
    } else {
        header('Location: ../contacts.php?status=error');
    }
}
?>