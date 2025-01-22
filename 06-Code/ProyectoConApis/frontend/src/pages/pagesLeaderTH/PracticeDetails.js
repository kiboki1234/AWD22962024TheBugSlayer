import React from "react";
import { Modal, Button } from "react-bootstrap";

const PracticeDetails = ({ practice, show, handleClose }) => {
    if (!practice) return null;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalles de la Práctica</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Título:</strong> {practice.title}</p>
                <p><strong>Fecha:</strong> {practice.date}</p>
                <p><strong>Hora de inicio:</strong> {practice.startTime}</p>
                <p><strong>Hora de finalización:</strong> {practice.endTime}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PracticeDetails;
