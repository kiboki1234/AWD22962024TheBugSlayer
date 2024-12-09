<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio - CPED</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/styles.css">
    <link rel="stylesheet" href="./assets/css/styleWhatsappBtn.css">
</head>

<body>
    <!-- Barra de navegación -->
    <?php include_once './layouts/navbar.php';?> 

    <!-- Carrusel de fotos -->
   <!-- Carrusel de fotos con Hero -->
   <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://res.cloudinary.com/dp8wdwo5h/image/upload/v1733635840/IMG_4891_s9rdvn.jpg" class="d-block w-100" alt="Imagen 1">
                <div class="carousel-caption d-none d-md-block">
                    <h1>Bienvenido al Club de Política Exterior y Diplomación</h1>
                    <p>Simulamos modelos de debate como la ONU y el Parlamento Británico. ¡Únete a nosotros para desarrollar tus habilidades de oratoria y diplomacia!</p>
                    <a href="./aboutUs.php" class="btn btn-primary btn-lg">Saber más</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://res.cloudinary.com/dp8wdwo5h/image/upload/v1733635566/IMG_20241121_135408_gz3yev.jpg" class="d-block w-100" alt="Imagen 2">
                <div class="carousel-caption d-none d-md-block">
                    <h1>Ven y se parte de esta unica experiencia</h1>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://res.cloudinary.com/dp8wdwo5h/image/upload/v1733636241/WhatsApp_Image_2024-12-06_at_16.02.57_c45df41e_orykcj.jpg" class="d-block w-100" alt="Imagen 3">
                <div class="carousel-caption d-none d-md-block">
                    <h1>Aprende y desarrolla nuevas habilidades</h1>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <section id="modelos" class="container my-5">
        <h2 class="section-title">Modelos de Debate</h2>
        <div class="row g-4">
            <div class="col-md-6">
                <div class="card">
                    <img src="https://res.cloudinary.com/dp8wdwo5h/image/upload/v1733636620/WhatsApp_Image_2024-12-06_at_16.03.04_95e83afd_odjtsr.jpg" class="card-img-top" alt="Modelo ONU">
                    <div class="card-body">
                        <h5 class="card-title">Modelo ONU</h5>
                        <p>Simula las reuniones de la ONU, permitiendo a los participantes representar países y debatir sobre temas globales.</p>
                        <a href="modelosDebate.php" class="btn btn-primary">Más Información</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <img src="https://res.cloudinary.com/dp8wdwo5h/image/upload/v1733636518/parlamento_yaipq5.jpg" class="card-img-top" alt="Parlamento Británico">
                    <div class="card-body">
                        <h5 class="card-title">Parlamento Británico</h5>
                        <p>Un formato dinámico de debate competitivo donde equipos argumentan a favor o en contra de una moción.</p>
                        <a href="modelosDebate.php" class="btn btn-primary">Más Información</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección: Eventos -->
    <section id="eventos" class="container my-5">
        <h2 class="section-title">Próximos Eventos</h2>
        <div class="row g-4">
            <div class="col-md-6">
                <div class="card">
                    <img src="https://res.cloudinary.com/dp8wdwo5h/image/upload/v1733638013/WhatsApp_Image_2024-12-06_at_16.03.04_3caad7df_ftintb.jpg" class="card-img-top" alt="Evento 1">
                    <div class="card-body">
                        <h5 class="card-title">SICMUN V</h5>
                        <p>Fecha: 15 de diciembre | Lugar: Auditorio Central</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <img src="https://res.cloudinary.com/dp8wdwo5h/image/upload/v1733637672/SICMUN_wuxwut.png" class="card-img-top" alt="Evento 2">
                    <div class="card-body">
                        <h5 class="card-title">BUSSINESMUN V</h5>
                        <p>Fecha: 20 de diciembre | Lugar: Salón de Conferencias</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php include_once './layouts/bottonWhatsApp.php';
    //phpinfo();?>
    <footer>
        <p>&copy; 2024 CPED. Todos los derechos reservados.</p>
    </footer>
    

    <!-- Referencia al archivo de JavaScript -->
    <script src="./assets/scriptsJs/menu.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
