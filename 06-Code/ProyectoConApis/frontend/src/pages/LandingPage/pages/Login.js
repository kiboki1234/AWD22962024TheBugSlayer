import React, { useState } from "react";
import CustomModal from "./ModalLogin";
import "../css/stylesLogin.css";
import API_BASE_URL from "../../../api";
const Login = () => {
    const [modalInfo, setModalInfo] = useState({ title: "Modal title", text: "..." });
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: e.target.username.value,
                    password: e.target.passwordLogin.value,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                // Mostrar mensaje de éxito y redirigir
                setModalInfo({ title: "¡Éxito!", text: "Inicio de sesión exitoso." });
                localStorage.setItem("token", data.token); // Guardar token en el almacenamiento local
                localStorage.setItem("user", JSON.stringify(data.user)); // Guardar información del usuario en el almacenamiento local
                // Redirigir a la página principal de la aplicación
                window.location.href = "/";
            } else {
                // Manejar diferentes mensajes de error
                if (response.status === 404) {
                    setModalInfo({ title: "Error", text: "Usuario no encontrado." });
                } else if (response.status === 401) {
                    setModalInfo({ title: "Error", text: "Contraseña incorrecta." });
                } else {
                    setModalInfo({ title: "Error", text: data.message || "Algo salió mal." });
                }
            }
            handleModal();
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setModalInfo({ title: "Error", text: "No se pudo conectar al servidor." });
            handleModal();
        }
    };

    return (
        <>
          <div className="container pt-4">
                <form onSubmit={handleSubmit} className="login-container form-control">
                    <h1 className="h3 mb-3 fw-normal">Accede a tu cuenta del club CPED</h1>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="username" name="username" placeholder="Username" required />
                        <label htmlFor="username">Usuario</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="passwordLogin" name="passwordLogin" placeholder="Password" required />
                        <label htmlFor="passwordLogin">Contraseña</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Iniciar Sesion</button>
                </form>
            </div>

            <CustomModal show={showModal} handleClose={handleCloseModal} modalInfo={modalInfo} />
        </>
    );
};

export default Login;