import React, { useState } from "react";
import Navbar from "./common/Navbar";
import TaskDetailsModal from "./TaskDetailsModal";
import Footer from "./common/Footer";
//import BottonWhatsApp from "../ButtonWhatsApp";
import "./css/stylesTaskTracking.css";

const TaskTracking = () => {
  const [assignedTasks, setAssignedTasks] = useState([
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripción de la tarea 1",
      status: "To Do",
      assignedTo: "Juan Perez",
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripción de la tarea 2",
      status: "Doing",
      assignedTo: "Maria Lopez",
    },
  ]);
  const [createdTasks, setCreatedTasks] = useState([
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripción de la tarea 3",
      status: "Done",
      assignedTo: "Carlos Sanchez",
    },
    {
      id: 4,
      title: "Tarea 4",
      description: "Descripción de la tarea 4",
      status: "To Do",
      assignedTo: "Ana Martinez",
    },
  ]);
  const [taskModal, setTaskModal] = useState({
    title: "",
    description: "",
    assignedTo: "",
  });

  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };

  const handleStatusChange = (e) => {
    const updatedTask = { ...selectedTask, status: e.target.value };
    setSelectedTask(updatedTask);
    setAssignedTasks(
      assignedTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const handleModal = () => {
    const modal = new window.bootstrap.Modal(
      document.getElementById("task-modal")
    );
    modal.show();
  };

  const handleAssignTask = (e) => {
    e.preventDefault();

    const newTask = {
      title: e.target.taskTitle.value,
      description: e.target.taskDescription.value,
      assignedTo: e.target.assignedTo.value,
      createdBy: "currentUser", // Replace with the current user's name/ID
    };

    setCreatedTasks((prev) => [...prev, newTask]); // Add to "createdTasks"
    setAssignedTasks((prev) => [...prev, newTask]); // Assume the user sees their own tasks in "assignedTasks"
    e.target.reset();
  };

  const handleTaskClick = (task) => {
    setTaskModal(task);
    handleModal();
  };

  return (
    <>
      <Navbar />

      <div className="container pt-4 mt-4">
        <h1 className="text-center mb-4">Task Tracking</h1>

        <div className="row">
          {/* Asignar Tareas */}
          <div className="col-md-6 mb-4">
            <h2>Asignar Tarea</h2>
            <form onSubmit={handleAssignTask} className="form-control">
              <div className="mb-3">
                <label htmlFor="taskTitle" className="form-label">
                  Título de la Tarea
                </label>
                <input
                  type="text"
                  id="taskTitle"
                  name="taskTitle"
                  className="form-control"
                  placeholder="Escribe el título"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="taskDescription" className="form-label">
                  Descripción
                </label>
                <textarea
                  id="taskDescription"
                  name="taskDescription"
                  rows="3"
                  className="form-control"
                  placeholder="Escribe una descripción"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="assignedTo" className="form-label">
                  Asignar a
                </label>
                <input
                  type="text"
                  id="assignedTo"
                  name="assignedTo"
                  className="form-control"
                  placeholder="Usuario"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Asignar Tarea
              </button>
            </form>
          </div>

          {/* Tareas Asignadas al Usuario */}
          <div className="col-md-6 mb-4">
            <h2>Tareas Asignadas a Ti</h2>
            <div className="list-group">
              {assignedTasks.length > 0 ? (
                assignedTasks.map((task, index) => (
                  <li
                    key={task.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {task.title}
                    <button
                      className="btn btn-info"
                      onClick={() => handleShowModal(task)}
                    >
                      Ver Detalles
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-muted">No tienes tareas asignadas.</p>
              )}
            </div>
          </div>
        </div>

        {/* Tareas Creadas por el Usuario */}
        <div className="row">
          <div className="col-12">
            <h2>Tareas que Has Asignado</h2>
            <div className="list-group">
              {createdTasks.length > 0 ? (
                createdTasks.map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{task.title}</strong>
                            <br />
                            <small className="text-muted">Estado: {task.status}</small>
                        </div>
                    </li>
                ))
              ) : (
                <p className="text-muted">No has asignado ninguna tarea.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal para Detalles de Tarea */}
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
