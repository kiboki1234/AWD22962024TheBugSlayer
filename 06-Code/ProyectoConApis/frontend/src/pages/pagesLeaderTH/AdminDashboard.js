import React, {useState} from "react";
import PracticesList from "./PracticesList";
import CreatePractice from "./CreatePractice";
import CalendarComponent from "./CalendarComponent";

const AdminDashboard = () => {
    const [practices, setPractices] = useState([
        { id: 1, title: "Práctica 1", date: "2025-01-21", startTime: "10:00", endTime: "12:00" },
        { id: 2, title: "Práctica 2", date: "2025-01-22", startTime: "14:00", endTime: "16:00" }
    ]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 mt-4">Panel de Administrador</h1>
            {/* <CalendarComponent practices={practices}/> */}
            <CalendarComponent practices={practices}/>
            <PracticesList />
            <CreatePractice />
        </div>
    );
};

export default AdminDashboard;
