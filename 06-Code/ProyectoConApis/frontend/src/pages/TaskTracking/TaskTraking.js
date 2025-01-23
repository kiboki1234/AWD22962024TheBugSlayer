import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskDetailsModal from "./TaskDetailsModal";
import Footer from "../common/Footer";
import "../css/stylesTaskTracking.css";
import API_BASE_URL from "../../api";
import AssignTask from './AssignTask';
import AssignedTasks from './AssignedTasks';


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
      <div className="container pt-4 mt-4">
        <h1 className="text-center mb-4">Seguimiento de Tareas</h1>

        <div className="row">
          <AssignTask handleAssignTask={handleAssignTask} />
          <AssignedTasks tasks={tasks} handleShowModal={handleShowModal} />
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
