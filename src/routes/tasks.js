import express from 'express';
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from '../controllers/tasks.js';
import {
  validatorCreateTask,
  validatorGetTaskById,
} from '../validators/tasks.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', validatorCreateTask, createTask);
router.get('/:id', validatorGetTaskById, getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
