<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
        <img class="logo-navbar" src="../assets/img/logonav.png" alt="logo">
        <a class="navbar-brand" href="./index.php"><strong>CPED</strong></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <?php
                // Rol del usuario (reemplazar con lógica dinámica)
                $userRole = 'admin'; // Cambia según la lógica de tu aplicación

                // Menú común para todos los roles
                echo '<li class="nav-item"><a class="nav-link" href="index.php">Inicio</a></li>';

                // Menú específico para administradores
                if ($userRole === 'admin') {
                    echo '<li class="nav-item"><a class="nav-link" href="./manage_users.php">Administrar Usuarios</a></li>';
                }

                // Menú específico para usuarios regulares
                if ($userRole === 'user') {
                    echo '<li class="nav-item"><a class="nav-link" href="profile.php">Perfil</a></li>';
                    echo '<li class="nav-item"><a class="nav-link" href="tasks.php">Tareas</a></li>';
                }
                ?>
                <!-- Opción de cerrar sesión -->
                <li class="nav-item">
                    <a class="nav-link text-danger" href="../middleware/logout.php">Cerrar sesión</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
