import React from 'react';

const AssignedTasks = ({ tasks, handleShowModal }) => {
  return (
    <div className="col-md-6 mb-4">
      <h2>Tareas Asignadas para Mi</h2>
      <ul className="list-group">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
              {task.title}
              <button className="btn btn-info" onClick={() => handleShowModal(task)}>
                Ver Detalles
              </button>
            </li>
          ))
        ) : (
          <p className="text-muted">No tienes tareas asignadas.</p>
        )}
      </ul>
    </div>
  );
};

export default AssignedTasks;