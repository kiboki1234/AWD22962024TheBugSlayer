<?php
    // Configuración de la base de datos
    $host = 'postgresql-cped.alwaysdata.net'; 
    $port = '5432';
    $dbname = 'cped_data'; 
    $user = 'cped'; 
    $password = 'QNAw3N3Pgi&NQX8tE'; 

    // Crear una cadena de conexión
    try {
        $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;";
        $pdo = new PDO($dsn, $user, $password);
    

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Modo de errores
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC); // Modo de fetch por defecto
        //echo $pdo;
    } catch (PDOException $e) {
        die("Error al conectar a la base de datos: " . $e->getMessage());
    }
?>
