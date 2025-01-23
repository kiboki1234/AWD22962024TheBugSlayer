import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import API_BASE_URL from "../../api";

const PracticeDetails = ({ practice, show, handleClose }) => {
    const [users, setUsers] = useState([]);
    const [attendanceStatus, setAttendanceStatus] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/users/all`);
                setUsers(response.data);
            } catch (error) {
                console.error("Error al obtener los usuarios:", error);
            }
        };

        if (show) {
            fetchUsers();
        }
    }, [show]);

    const handleRegisterAttendance = async (userId) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/attendances`, {
                user: userId,
                practice: practice._id,
                attended: true,
                checkInTime: new Date(),
            });
            setAttendanceStatus({ userId, status: "success" });
            setTimeout(() => setAttendanceStatus(null), 3000); // Mensaje desaparece después de 3 segundos
        } catch (error) {
            setAttendanceStatus({ userId, status: "error" });
            console.error("Error al registrar la asistencia:", error);
            setTimeout(() => setAttendanceStatus(null), 3000); // Mensaje desaparece después de 3 segundos
        }
    };

    if (!practice) return null;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalles de la Práctica</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-control mb-2">
                    <p><strong>Título:</strong> {practice.title}</p>
                    <p><strong>Fecha:</strong> {practice.date}</p>
                    <p><strong>Hora de inicio:</strong> {practice.startTime}</p>
                    <p><strong>Hora de finalización:</strong> {practice.endTime}</p>
                </div>
                <div className="form-control">
                    <h5>Lista de Asistencia</h5>
                    <ul className="list-group">
                        {users.map((user) => (
                            <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
                                {user.name}
                                <Button
                                    variant="primary"
                                    onClick={() => handleRegisterAttendance(user._id)}
                                    disabled={attendanceStatus && attendanceStatus.userId === user._id && attendanceStatus.status === "success"}
                                >
                                    {attendanceStatus && attendanceStatus.userId === user._id && attendanceStatus.status === "success"
                                        ? "Asistencia Registrada"
                                        : "Registrar Asistencia"}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
                {attendanceStatus && attendanceStatus.status === "error" && (
                    <div className="alert alert-danger mt-3">Error al registrar la asistencia.</div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PracticeDetails;