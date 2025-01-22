import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../common/Navbar";
import TaskDetailsModal from "./TaskDetailsModal";
import Footer from "../common/Footer";
import "../css/stylesTaskTracking.css";
import API_BASE_URL from "../../api";

const TaskTracking = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  // Obtener tareas desde el backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tasks/all`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    }
  };

  // Manejar el cambio de estado de la tarea
  const handleStatusChange = async (e) => {
    const updatedTask = { ...selectedTask, status: e.target.value };
    setSelectedTask(updatedTask);

    try {
      await axios.put(`${API_BASE_URL}/api/tasks/update/${selectedTask._id}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  // Mostrar modal con detalles de tarea
  const handleShowModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  // Cerrar modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };

  // Manejar la creación de tareas
  const handleAssignTask = async (e) => {
    e.preventDefault();

    const newTask = {
      title: e.target.taskTitle.value,
      description: e.target.taskDescription.value,
      assignedTo: e.target.assignedTo.value,
      createdBy: "currentUser",
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/api/tasks/create`, newTask);
      setTasks([...tasks, response.data.task]);
      e.target.reset();
    } catch (error) {
      console.error("Error al asignar tarea:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container pt-4 mt-4">
        <h1 className="text-center mb-4">Seguimiento de Tareas</h1>

        <div className="row">
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

          <div className="col-md-6 mb-4">
            <h2>Tareas Asignadas</h2>
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
        </div>
      </div>

      <TaskDetailsModal
        show={showModal}
        handleClose={handleCloseModal}
        task={selectedTask}
        handleStatusChange={handleStatusChange}
      />

      <Footer />
    </>
  );
};

export default TaskTracking;
