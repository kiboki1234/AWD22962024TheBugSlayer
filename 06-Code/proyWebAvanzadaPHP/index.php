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

    <div class="hero ">
        <div class="container pt-4">
            <h1>Bienvenido al Club de Política Exterior y Diplomación</h1>
            <p>Simulamos modelos de debate como la ONU y el Parlamento Británico. ¡Únete a nosotros para desarrollar tus
                habilidades de oratoria y diplomacia!</p>
            <a href="./aboutUs.html" class="btn btn-primary btn-lg">Saber más</a>
        </div>
    </div>
    <section id="modelos" class="container my-5">
        <h2 class="section-title">Modelos de Debate</h2>
        <div class="row g-4">
            <div class="col-md-6">
                <div class="card">
                    <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Modelo ONU">
                    <div class="card-body">
                        <h5 class="card-title">Modelo ONU</h5>
                        <p>Simula las reuniones de la ONU, permitiendo a los participantes representar países y debatir sobre temas globales.</p>
                        <a href="modelosDebate.html" class="btn btn-primary">Más Información</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Parlamento Británico">
                    <div class="card-body">
                        <h5 class="card-title">Parlamento Británico</h5>
                        <p>Un formato dinámico de debate competitivo donde equipos argumentan a favor o en contra de una moción.</p>
                        <a href="modelosDebate.html" class="btn btn-primary">Más Información</a>
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
                    <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Evento 1">
                    <div class="card-body">
                        <h5 class="card-title">SICMUN V</h5>
                        <p>Fecha: 15 de diciembre | Lugar: Auditorio Central</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Evento 2">
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
