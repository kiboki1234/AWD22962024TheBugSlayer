const express = require('express');
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

// Rutas CRUD para las tareas
router.post('/create', createTask);
router.get('/all', getAllTasks);
router.get('/:id', getTaskById);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;
