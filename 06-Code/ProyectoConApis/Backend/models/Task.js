const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ['To Do', 'Doing', 'Done'],
    default: 'To Do'
  },
  assignedTo: { type: String, required: true }, // Usuario asignado
  createdBy: { type: String, required: true }, // Usuario que creó la tarea
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
