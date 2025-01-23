import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../api';

const AssignTask = ({ handleAssignTask }) => {

  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/leaders`);
        setLeaders(response.data);
      } catch (error) {
        console.error("Error al obtener los líderes:", error);
      }
    };

    fetchLeaders();
  }, []);
  return (
    <div className="col-md-6 mb-4">
      <h2>Asignar Tarea</h2>
      <form onSubmit={handleAssignTask} className="form-control">
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">Título</label>
          <input type="text" id="taskTitle" name="taskTitle" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">Descripción</label>
          <textarea id="taskDescription" name="taskDescription" rows="3" className="form-control" required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="assignedTo" className="form-label">Asignar a</label>
          <select id="assignedTo" name="assignedTo" className="form-control" required>
            <option value="">Selecciona un usuario</option>
            {leaders.map((leader) => (
              <option key={leader._id} value={leader._id}>
                {leader.assignedMembers.map(member => member.name).join(', ')}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Asignar Tarea</button>
      </form>
    </div>
  );
};

export default AssignTask;