import React, { useState } from "react";

const CreatePractice = () => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        startTime: ""
    });
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.date || !formData.startTime) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        const endTime = calculateEndTime(formData.startTime);
        const practiceData = {
            ...formData,
            endTime
        };
        // Lógica para guardar practiceData en la base de datos
        console.log(practiceData);
        setSuccessMessage("Práctica creada exitosamente.");
        setFormData({
            title: "",
            date: "",
            startTime: ""
        });
        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };

    const calculateEndTime = (startTime) => {
        const [hours, minutes] = startTime.split(":").map(Number);
        const endHours = (hours + 2) % 24;
        return `${endHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    };

    return (
        <div className="card mb-4">
            <div className="card-header bg-warning text-white">Crear Nueva Práctica</div>
            <div className="card-body">
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Fecha</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="startTime" className="form-label">Hora de Inicio</label>
                        <input
                            type="time"
                            className="form-control"
                            id="startTime"
                            value={formData.startTime}
                            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Crear Práctica</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePractice;