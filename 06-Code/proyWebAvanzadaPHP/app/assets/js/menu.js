// Datos del menú definidos directamente
const menuItems = [
    { name: "Salir", href: "../middleware/logout.php" },
    
];

// Función para renderizar el menú
function loadMenu() {
    const navList = document.querySelector('.navbar-nav');

    // Limpiar elementos existentes (por si acaso)
    navList.innerHTML = '';

    // Crear elementos de menú dinámicamente
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'nav-item';

        const link = document.createElement('a');
        link.className = 'nav-link';
        link.href = item.href;
        link.textContent = item.name;

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
}

// Llamar a la función para cargar el menú
loadMenu();
