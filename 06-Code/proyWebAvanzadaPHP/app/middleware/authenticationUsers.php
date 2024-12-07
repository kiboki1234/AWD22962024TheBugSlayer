<?php
// AuthController.php
require_once './app/config/config.php'; 

// Función para verificar el usuario y la contraseña
function verifyUser($username, $password, $pdo) {
    try {
        // Consulta actualizada para obtener información adicional
        $sql = "SELECT 
            u.id_usuario AS id_usuario, 
            u.id_miembro, 
            m.nombre AS nombre_miembro, 
            r.nombre AS nombre_rol
            FROM usuarios u
            JOIN miembros m ON u.id_miembro = m.id_miembro
            JOIN roles r ON m.id_rol = r.id
            WHERE u.username = :username AND u.password = :password;";
                
        $stmt = $pdo->prepare($sql);

        // Vinculación de parámetros para evitar inyecciones SQL
        $stmt->bindParam(':username', $username, PDO::PARAM_STR);
        $stmt->bindParam(':password', $password, PDO::PARAM_STR);

        $stmt->execute();
        
        return $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        // Manejo de errores de la base de datos
        error_log("Error en verifyUser: " . $e->getMessage());
        echo 'Nadota';
        return false;
    }
}

?>
