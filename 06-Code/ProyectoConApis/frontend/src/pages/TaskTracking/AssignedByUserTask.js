import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../api';

const AssignedByUserTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/tasks/assigned-by-user`);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error al obtener las tareas asignadas por el usuario:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="col-md-6 mb-4">
      <h2>Tareas Asignadas por Mí</h2>
      <ul className="list-group">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id} className="list-group-item">
              <h5>{task.title}</h5>
              <p><strong>Asignado a:</strong> {task.assignedTo.name}</p>
              <p><strong>Estado:</strong> {task.status}</p>
            </li>
          ))
        ) : (
          <p className="text-muted">No has asignado ninguna tarea.</p>
        )}
      </ul>
    </div>
  );
};

export default AssignedByUserTasks;