import express from 'express';
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from '../controllers/projects.js';
import {
  validatorCreateProject,
  validatorGetProjectById,
} from '../validators/projects.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', validatorCreateProject, createProject);
router.get('/:id', validatorGetProjectById, getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
