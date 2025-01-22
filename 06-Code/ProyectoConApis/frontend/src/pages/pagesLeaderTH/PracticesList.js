import React, { useState } from "react";
import PracticeDetails from "./PracticeDetails";

const PracticesList = () => {
    const [selectedPractice, setSelectedPractice] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const practices = [
        { id: 1, title: "Práctica 1", date: "2025-01-21" },
        { id: 2, title: "Práctica 2", date: "2025-01-22" }
    ];

    const handleSelectPractice = (practice) => {
        setSelectedPractice(practice);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="card mb-4">
                <div className="card-header bg-primary text-white">Lista de Prácticas</div>
                <div className="card-body">
                    <ul className="list-group">
                        {practices.map((practice) => (
                            <li key={practice.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {practice.title} - {practice.date}
                                <button className="btn btn-info" onClick={() => handleSelectPractice(practice)}>Ver Detalles</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {selectedPractice && (
                <PracticeDetails
                    practiceId={selectedPractice.id}
                    show={showModal}
                    handleClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default PracticesList;