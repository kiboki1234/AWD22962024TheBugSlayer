<?php
// AuthController.php
require_once './app/config/config.php';  // Incluir la conexión a la base de datos

// Función para verificar el usuario y la contraseña
function verifyUser($correo, $password, $pdo) {
    try {
        // Consulta SQL para verificar el usuario por correo y contraseña
        $sql = "SELECT id_usuario, nombre, correo, rol FROM usuario WHERE correo = :correo AND password = :password";
        $stmt = $pdo->prepare($sql);
        
        // Vinculación de parámetros para evitar inyecciones SQL
        $stmt->bindParam(':correo', $correo, PDO::PARAM_STR);
        $stmt->bindParam(':password', $password, PDO::PARAM_STR);
        
        $stmt->execute();
        
        // Retorna los datos del usuario si existe
        return $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        // Manejo de errores de la base de datos
        error_log("Error en verifyUser: " . $e->getMessage());
        return false;
    }
}
?>
