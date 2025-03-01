import React, { useState } from "react";
import Navbar from "../Navbar";
import BottonWhatsApp from "../ButtonWhatsApp";
import "../css/stylesLogin.css";

const Login = () => {
    const [modalInfo, setModalInfo] = useState({ title: "Modal title", text: "..." });

    const handleModal = () => {
        const modal = new window.bootstrap.Modal(document.getElementById("modal-dialog-msg"));
        modal.show();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: e.target.username.value,
                    password: e.target.passwordLogin.value,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                // Mostrar mensaje de éxito y redirigir
                setModalInfo({ title: "¡Éxito!", text: "Inicio de sesión exitoso." });
                localStorage.setItem("token", data.token); // Guardar token en el almacenamiento local
            } else {
                // Mostrar mensaje de error
                setModalInfo({ title: "Error", text: data.message || "Algo salió mal." });
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
            <Navbar />

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

            <div className="modal fade" id="modal-dialog-msg" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalTitle">{modalInfo.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="modalText">
                            {modalInfo.text}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <BottonWhatsApp />
        </>
    );
};

export default Login;