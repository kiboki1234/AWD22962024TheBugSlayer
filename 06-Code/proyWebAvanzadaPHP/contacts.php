<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contactos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/styleContacts.css">  
    <link rel="stylesheet" href="./assets/css/styleWhatsappBtn.css">
  </head>
  <body>
    <!-- Barra de navegación -->
    <?php include_once './layouts/navbar.php';?> 
    
    <div class="container pt-4">
        <div class="contact-container">
            <h1 class="text-center header-title">Contáctanos</h1>
            <p class="text-center">¿Tienes preguntas? ¡Estamos aquí para ayudarte!</p>
            <div class="contact-info mb-4">
                <h5>Información de Contacto</h5>
                <p><strong>Correo:</strong> cped@espe.edu.ec</p>
                <p><strong>Teléfono:</strong> +593 90 695 6237</p>
                <p><strong>Dirección:</strong> Av. Gral. Rumiñahui S/N, Sangolquí 171103</p>
            </div>
            <?php
                if (isset($_GET['status']) && $_GET['status'] === 'success') {
                    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>En buena hora!</strong> Tu mensaje se ha enviado con exito.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>';
                }else if (isset($_GET['status']) && $_GET['status'] === 'error') {
                    echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>¡Error!</strong> No se ha podido enviar tu mensaje.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>';
                }
            ?>
            <form action="./scriptsPHP/sendFormContact.php" method="POST">
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" pattern="/^[\p{L} .'-]+$/u" maxlength="100" id="name" name="name" placeholder="Ingresa tu nombre completo" required>
                </div>
                <div class="mb-3">
                    <label for="text" class="form-label">Numero de telefono</label>
                    <input type="text" class="form-control" id="phone" name="phone" pattern="/^\+?\d{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)?[\d\s.-]{7,}$/" maxlength="15" placeholder="Ejm: +593992622595 " required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="message" name="message" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Enviar Mensaje</button>
            </form>
        </div>
    </div>
    <?php include_once './layouts/bottonWhatsApp.php';?>
    <script src="./assets/scriptsJs/menu.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="./assets/scriptsJs/resetQuerys.js"></script>
  </body>
</html>