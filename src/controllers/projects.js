import { matchedData } from 'express-validator';
import { Project } from '../models/project.js';
import { handleHttpErrors } from '../utilities/handleHttpErrors.js';

export const getProjects = async (req, res) => {
  const projects = await Project.findAll({
    include: 'tasks',
  });
  return res.json(projects);
};
export const getProjectById = async (req, res) => {
  const { id } = matchedData(req);
  const project = await Project.findAll({
    where: { id },
    include: 'tasks',
  });
  return res.json(project);
};
export const createProject = async (req, res) => {
  try {
    const body = matchedData(req);
    const project = await Project.create(body);
    return res.json(project);
  } catch (error) {
    handleHttpErrors(res, 'ERROR_CREATING_PROJECT');
  }
};
export const updateProject = async (req, res) => res.json({ a: 4 });
export const deleteProject = async (req, res) => res.json({ a: 5 });
