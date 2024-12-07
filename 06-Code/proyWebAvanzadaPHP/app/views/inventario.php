<?php include_once './includes/header.php';?>
<?php 
$seccion_actual = 'inventario'; 
$accesos_usuario = explode(',', $_SESSION['accesos_usuario']);
if (!in_array($seccion_actual, $accesos_usuario)) {
    header('Location: ./indexAdmin.php');
}
?>
<div class="container">
  <h1>Inventario</h1>
</div>
<?php include_once './includes/footer.php';?>
