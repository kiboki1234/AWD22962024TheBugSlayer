import React, {useState} from "react";
import PracticesList from "./PracticesList";
import CreatePractice from "./CreatePractice";
import CalendarComponent from "./CalendarComponent";

const AdminDashboard = () => {

    return (
        <div className="container mt-4">
            <h1 className="mb-4 mt-4">Panel de Administrador</h1>
            {/* <CalendarComponent practices={practices}/> */}
            <CalendarComponent/>
            <PracticesList />
            <CreatePractice />
        </div>
    );
};

export default AdminDashboard;
