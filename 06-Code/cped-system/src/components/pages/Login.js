import React, { useState } from "react";
import Navbar from "../Navbar";
import BottonWhatsApp from "../ButtonWhatsApp";
import Footer from "../Footer";
import "../css/stylesLogin.css"; // Asegúrate de tener un archivo de estilos si es necesario

const Login = () => {
    const [modalInfo, setModalInfo] = useState({ title: "Modal title", text: "..." });

    const handleModal = () => {
        const modal = new window.bootstrap.Modal(document.getElementById("modal-dialog-msg"));
        modal.show();
    };

    return (
        <>
            <Navbar />

            <div className="container pt-4">
                <form action="./auth.php" method="POST" className="login-container form-control">
                    <h1 className="h3 mb-3 fw-normal">Accede a tu cuenta del club CPED</h1>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="username" name="username" placeholder="Username" />
                        <label htmlFor="username">Usuario</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="passwordLogin" name="passwordLogin" placeholder="Password" />
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