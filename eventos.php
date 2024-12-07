<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos - CPED</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/styleEvents.css">
    <link rel="stylesheet" href="./assets/css/styleWhatsappBtn.css">
</head>
<body>
    <!-- Barra de navegación -->
    <?php include_once './layouts/navbar.php';?> 
    
    <div class="container event-container pt-4">
        <h1 class="text-center header-title">Próximos Eventos</h1>
        <div class="row g-4">
            <!-- Card 1 -->
            <div class="col-md-6">
                <div class="card">
                    <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Evento 1">
                    <div class="card-body">
                        <h5 class="card-title">Modelo ONU - Debate General</h5>
                        <p class="card-text">Fecha: 12 de diciembre, 2024<br>Lugar: Auditorio Central CPED<br>Descripción: Explora temas globales mientras desarrollas habilidades de oratoria y negociación.</p>
                        <a href="#" class="btn btn-primary w-100">Más Información</a>
                    </div>
                </div>
            </div>
            <!-- Card 2 -->
            <div class="col-md-6">
                <div class="card">
                    <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Evento 2">
                    <div class="card-body">
                        <h5 class="card-title">Parlamento Británico - Debate Extemporáneo</h5>
                        <p class="card-text">Fecha: 19 de enero, 2025<br>Lugar: Salón de Conferencias CPED<br>Descripción: Participa en debates rápidos y argumenta con persuasión sobre temas asignados.</p>
                        <a href="#" class="btn btn-primary w-100">Más Información</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include_once './layouts/bottonWhatsApp.php';?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/scriptsJs/menu.js"></script>
</body>
</html>
