<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modelos de Debate - CPED</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/styleModelos.css">
    <link rel="stylesheet" href="./assets/css/styleWhatsappBtn.css">
</head>
<body>
    <!-- Barra de navegación -->
    <?php include_once './layouts/navbar.php';?> 
    
    <div class="container mt-5 pt-4">
        <h1 class="text-center header-title">Modelos de Debate</h1>
        <p class="text-center">Descubre los distintos modelos de debate que practicamos en CPED, diseñados para fomentar el análisis crítico, la oratoria y el trabajo en equipo.</p>

        <!-- Modelo ONU -->
        <div class="info-section">
            <h2 class="section-title">Modelo ONU</h2>
            <p>El Modelo de Naciones Unidas (MUN) es una simulación de las reuniones de la ONU, donde los participantes representan a países y debaten sobre temas internacionales. Se enfoca en el desarrollo de habilidades como la diplomacia, el debate y la negociación.</p>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card">
                        <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Asamblea General">
                        <div class="card-body">
                            <h5 class="card-title">Asamblea General</h5>
                            <p class="card-text">La principal arena de debate donde todos los países tienen representación igualitaria. Se discuten temas de paz, seguridad y desarrollo.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Consejo de Seguridad">
                        <div class="card-body">
                            <h5 class="card-title">Consejo de Seguridad</h5>
                            <p class="card-text">Discute asuntos relacionados con la seguridad internacional y la resolución de conflictos. Tiene la facultad de tomar decisiones vinculantes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modelo Parlamento Británico -->
        <div class="info-section">
            <h2 class="section-title">Modelo Parlamento Británico</h2>
            <p>El Parlamento Británico (BP) es un formato de debate competitivo que se enfoca en la argumentación y el pensamiento rápido. Los participantes forman equipos y debaten en torno a una moción asignada al momento.</p>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card">
                        <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Cámara Alta">
                        <div class="card-body">
                            <h5 class="card-title">Cámara Alta</h5>
                            <p class="card-text">Conformada por los equipos que apoyan y argumentan a favor de la moción. Trabajan en conjunto para presentar las ideas más persuasivas.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <img src="https://via.placeholder.com/500x300" class="card-img-top" alt="Cámara Baja">
                        <div class="card-body">
                            <h5 class="card-title">Cámara Baja</h5>
                            <p class="card-text">Argumenta en contra de la moción presentada, desafiando las ideas de la Cámara Alta con creatividad y lógica.</p>
                        </div>
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
