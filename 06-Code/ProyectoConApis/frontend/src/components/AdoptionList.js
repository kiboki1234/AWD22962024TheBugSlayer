import React, { useEffect, useState } from "react";
import API from "../services/api";
import useAuth from "../hooks/useAuth";

const Adoptions = () => {
  const { user } = useAuth();
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    if (user?.role !== "admin") {
      alert("No tienes permisos para acceder a esta página.");
      return;
    }

    const fetchAdoptions = async () => {
      try {
        const { data } = await API.get("/adoptions");
        setAdoptions(data);
      } catch (error) {
        alert("Error al cargar las adopciones");
      }
    };

    fetchAdoptions();
  }, [user]);

  if (user?.role !== "admin") {
    return <p>Acceso denegado.</p>;
  }

  return (
    <div>
      <h1>Gestión de Adopciones</h1>
      <ul>
        {adoptions.map((adoption) => (
          <li key={adoption._id}>
            {adoption.pet.name} adoptado por {adoption.adopter.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adoptions;
