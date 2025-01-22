const Task = require('../models/Task');

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const { title, description, assignedTo, createdBy } = req.body;

    if (!title || !description || !assignedTo || !createdBy) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const newTask = new Task({ title, description, assignedTo, createdBy });
    await newTask.save();

    res.status(201).json({ message: "Tarea creada exitosamente", task: newTask });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la tarea", error: error.message });
  }
};

// Obtener todas las tareas
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas", error: error.message });
  }
};

// Obtener una tarea por ID
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la tarea", error: error.message });
  }
};

// Actualizar una tarea
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.status(200).json({ message: "Tarea actualizada exitosamente", task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la tarea", error: error.message });
  }
};

// Eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.status(200).json({ message: "Tarea eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la tarea", error: error.message });
  }
};
