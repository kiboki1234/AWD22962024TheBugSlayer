import React from 'react';

const AssignTask = ({ handleAssignTask }) => {
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
          <input type="text" id="assignedTo" name="assignedTo" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Asignar Tarea</button>
      </form>
    </div>
  );
};

export default AssignTask;