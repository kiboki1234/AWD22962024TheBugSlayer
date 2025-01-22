import React, { useEffect, useState } from "react";
import API from "../services/api";
import useAuth from "../hooks/useAuth";

const Appointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const endpoint = user.role === "admin" ? "/appointments" : "/appointments/my";
        const { data } = await API.get(endpoint);
        setAppointments(data);
      } catch (error) {
        alert("Error al cargar las citas");
      }
    };

    fetchAppointments();
  }, [user]);

  return (
    <div>
      <h1>{user.role === "admin" ? "Gestión de Citas" : "Mis Citas"}</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            {appointment.date} - {appointment.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
