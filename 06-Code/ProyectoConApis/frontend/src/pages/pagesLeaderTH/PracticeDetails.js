import React from "react";
import { Modal, Button } from "react-bootstrap";

const PracticeDetails = ({ practiceId, show, handleClose }) => {
    const members = [
        { id: 1, name: "Miembro 1", attended: false },
        { id: 2, name: "Miembro 2", attended: true }
    ];

    const handleAttendanceChange = (id) => {
        // Lógica para manejar el cambio de asistencia
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalles de la Práctica</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-4">
                    <h5>Información de la Práctica</h5>
                    <p><strong>ID:</strong> {practiceId}</p>
                    <p><strong>Título:</strong> Ejemplo de Práctica</p>
                    <p><strong>Fecha:</strong> 2025-01-21</p>
                </div>
                <div>
                    <h5>Miembros</h5>
                    <ul className="list-group">
                        {members.map((member) => (
                            <li key={member.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {member.name}
                                <input
                                    type="checkbox"
                                    checked={member.attended}
                                    onChange={() => handleAttendanceChange(member.id)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary">
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PracticeDetails;