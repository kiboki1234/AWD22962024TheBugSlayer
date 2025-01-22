import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import BottonWhatsApp from "../ButtonWhatsApp";
import Footer from "../Footer";
import "../css/stylesLogin.css";

// Aseguramos la importación correcta de Bootstrap
const bootstrap = require('bootstrap');

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [modalInfo, setModalInfo] = useState({ title: "Modal title", text: "..." });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setModalInfo({ title: "Éxito", text: "Inicio de sesión exitoso." });
      } else {
        setModalInfo({ title: "Error", text: response.data.message });
      }
    } catch (error) {
      setModalInfo({ title: "Error", text: error.response?.data?.message || "Error al iniciar sesión" });
    }

    // Asegurarse de que Bootstrap Modal está disponible
    if (bootstrap && bootstrap.Modal) {
      const modalElement = document.getElementById("modal-dialog-msg");
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    } else {
      console.error("Bootstrap no está cargado correctamente");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container pt-4">
        <form onSubmit={handleSubmit} className="login-container form-control">
          <h1 className="h3 mb-3 fw-normal">Accede a tu cuenta del club CPED</h1>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Correo Electrónico</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>

      <div className="modal fade" id="modal-dialog-msg" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{modalInfo.title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">{modalInfo.text}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

      <BottonWhatsApp />
      <Footer />
    </>
  );
};

export default Login;
