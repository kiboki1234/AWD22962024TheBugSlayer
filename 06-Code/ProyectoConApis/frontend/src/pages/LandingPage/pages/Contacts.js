import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../../api";
import BottonWhatsApp from "../ButtonWhatsApp";
import Footer from "../Footer";

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE_URL}/api/contact/messages`, formData);
            setStatus("success");
            setFormData({ name: "", phone: "", message: "" });
        } catch (error) {
            setStatus("error");
            console.error("Error al enviar el mensaje:", error);
        }
    };

    return (
        <div className="container pt-4">
            <h1 className="text-center">Contáctanos</h1>
            {status === "success" && <div className="alert alert-success">Mensaje enviado con éxito.</div>}
            {status === "error" && <div className="alert alert-danger">Error al enviar el mensaje.</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea name="message" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
            </form>
            <BottonWhatsApp />
            <Footer />
        </div>
    );
};

export default Contacts;
