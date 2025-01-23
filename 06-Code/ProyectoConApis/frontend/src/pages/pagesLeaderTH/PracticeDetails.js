import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import API_BASE_URL from "../../api";

const PracticeDetails = ({ practice, show, handleClose }) => {
    const [users, setUsers] = useState([]);
    const [attendanceStatus, setAttendanceStatus] = useState({});
    const token = localStorage.getItem('token');

    // Obtener la lista de usuarios y sus asistencias cuando se abre el modal
    useEffect(() => {
        const fetchUsersAndAttendances = async () => {
            try {
                // Obtener usuarios
                const usersResponse = await axios.get(`${API_BASE_URL}/api/users/all`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUsers(usersResponse.data);

                // Obtener asistencias de la práctica
                const attendanceResponse = await axios.get(`${API_BASE_URL}/api/attendances/practice/${practice._id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Mapear asistencias para saber quién ya asistió
                const attendanceMap = {};
                attendanceResponse.data.forEach((attendance) => {
                    attendanceMap[attendance.user._id] = true;
                });

                setAttendanceStatus(attendanceMap);
            } catch (error) {
                console.error("Error al obtener los usuarios o asistencias:", error);
            }
        };

        if (show && practice) {
            fetchUsersAndAttendances();
        }
    }, [show, practice, token]);

    // Registrar asistencia de un usuario
    const handleRegisterAttendance = async (userId) => {
        try {
            await axios.post(
                `${API_BASE_URL}/api/attendances`,
                {
                    user: userId,
                    practice: practice._id,
                    attended: true,
                    checkInTime: new Date(),
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // Actualizar el estado de asistencia en el frontend
            setAttendanceStatus((prevStatus) => ({
                ...prevStatus,
                [userId]: true
            }));
        } catch (error) {
            console.error("Error al registrar la asistencia:", error);
        }
    };

    // Descargar informes en formato PDF o Excel
    const downloadReport = async (type) => {
        try {
            const response = await axios.get(
                `${API_BASE_URL}/api/documents/report/${type}/${practice._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    responseType: 'blob'
                }
            );

            // Crear un enlace de descarga dinámico
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `asistencia_${practice.title}.${type === 'pdf' ? 'pdf' : 'xlsx'}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error(`Error al descargar el archivo ${type}:`, error);
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
                            <li 
                                key={user._id} 
                                className={`list-group-item d-flex justify-content-between align-items-center 
                                    ${attendanceStatus[user._id] ? "bg-success text-white" : ""}
                                `}
                            >
                                {user.name}
                                <Button
                                    variant={attendanceStatus[user._id] ? "success" : "primary"}
                                    onClick={() => handleRegisterAttendance(user._id)}
                                    disabled={attendanceStatus[user._id]}
                                >
                                    {attendanceStatus[user._id] ? "Asistencia Registrada" : "Registrar Asistencia"}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-danger" onClick={() => downloadReport('pdf')}>
                        Descargar PDF
                    </button>
                    <button className="btn btn-success" onClick={() => downloadReport('excel')}>
                        Descargar Excel
                    </button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PracticeDetails;
