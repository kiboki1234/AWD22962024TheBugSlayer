// Navbar.js
import React from "react";
//import "./Navbar.css"; // Archivo de estilos opcional para la barra de navegación
import logoIcon from "./assets/img/logonav.png"; // Importar la imagen del logo

const menuItems = [
    { text: "Inicio", link: "./index.php" },
    { text: "Nosotros", link: "./aboutUs.php" },
    { text: "Modelos de Debate", link: "./models.php" },
    { text: "Contacto", link: "./contact.php" },
    { text: "Login", link: "./login.php" },
];


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <img className="logo-navbar" src={logoIcon} alt="logo" />
                <a className="navbar-brand" href="./index.php"><strong>CPED</strong></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Los elementos del menú se pueden generar dinámicamente aquí */}
                        {menuItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href={item.link}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
