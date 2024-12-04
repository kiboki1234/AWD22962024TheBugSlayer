<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre Nosotros - CPED</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/styleAboutUs.css">
    <link rel="stylesheet" href="../assets/css/styleWhatsappBtn.css">
</head>
<body>
    <!-- Barra de navegación -->
    <?php include_once './layouts/navbar.php';?> 
    
    <div class="container about-section pt-4">
        <h1 class="text-center header-title">Sobre Nosotros</h1>
        <p class="text-center">El **Club de Política Exterior y Diplomación (CPED)** se dedica a promover el aprendizaje y la práctica de habilidades diplomáticas, de debate y negociación a través de simulaciones como Modelos de Naciones Unidas y el Parlamento Británico.</p>
        
        <div class="row g-4">
            <!-- Visión -->
            <div class="col-md-6">
                <div class="vision-mission">
                    <h5>Visión</h5>
                    <p>Ser un referente en la formación de jóvenes líderes con habilidades de pensamiento crítico, diplomacia y capacidad para generar cambios en sus comunidades.</p>
                </div>
            </div>
            <!-- Misión -->
            <div class="col-md-6">
                <div class="vision-mission">
                    <h5>Misión</h5>
                    <p>Fomentar un espacio inclusivo y dinámico donde los participantes desarrollen habilidades comunicativas, analíticas y de liderazgo mediante modelos de debate.</p>
                </div>
            </div>
        </div>

        <h2 class="section-title mt-5">Nuestro Equipo</h2>
        <div class="row g-4 text-center">
            <!-- Miembro 1 -->
            <div class="col-md-4">
                <div class="team-member">
                    <img src="https://via.placeholder.com/120" alt="Presidenta">
                    <h6>Presidenta</h6>
                    <p>María González</p>
                </div>
            </div>
            <!-- Miembro 2 -->
            <div class="col-md-4">
                <div class="team-member">
                    <img src="https://via.placeholder.com/120" alt="Líder de Talento Humano">
                    <h6>Líder de Talento Humano</h6>
                    <p>Juan Pérez</p>
                </div>
            </div>
            <!-- Miembro 3 -->
            <div class="col-md-4">
                <div class="team-member">
                    <img src="https://via.placeholder.com/120" alt="Coordinador Académico">
                    <h6>Coordinador Académico</h6>
                    <p>Laura Sánchez</p>
                </div>
            </div>
        </div>
    </div>
    <?php include_once './layouts/bottonWhatsApp.php';?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/scriptsJs/menu.js"></script>
</body>
</html>
