<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
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
                <p><strong>Correo:</strong> contacto@cped.com</p>
                <p><strong>Teléfono:</strong> +1 234 567 890</p>
                <p><strong>Dirección:</strong> Av. Principal, Edificio CPED, Ciudad.</p>
            </div>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre completo" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="message" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Enviar Mensaje</button>
            </form>
        </div>
    </div>
    <?php include_once './layouts/bottonWhatsApp.php';?>
    <script src="./assets/scriptsJs/menu.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>