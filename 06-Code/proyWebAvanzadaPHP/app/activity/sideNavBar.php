
<div id="sidebar" class="bg-light border-right ">
    <div class="sidebar-heading">Menú</div>
        <div class="list-group list-group-flush">
            <?php
            // Simulación de roles de usuario
            $userRole = 'admin'; // Cambia esto según el rol del usuario

            // Menú común para todos los usuarios
            echo '<a href="#" class="list-group-item list-group-item-action bg-light">Inicio</a>';

            // Menú para administradores
            if ($userRole == 'admin') {
                echo '<a href="#" class="list-group-item list-group-item-action bg-light">Administrar Usuarios</a>';
                echo '<a href="#" class="list-group-item list-group-item-action bg-light">Configuraciones</a>';
            }

            // Menú para usuarios regulares
            if ($userRole == 'user') {
                echo '<a href="#" class="list-group-item list-group-item-action bg-light">Perfil</a>';
                echo '<a href="#" class="list-group-item list-group-item-action bg-light">Tareas</a>';
            }
            ?>
        </div>
</div>