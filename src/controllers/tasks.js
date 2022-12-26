import { matchedData } from 'express-validator';
import { Project } from '../models/project.js';
import { Task } from '../models/task.js';
import { handleHttpErrors } from '../utilities/handleHttpErrors.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    include: [Project],
  });
  return res.json(tasks);
};
export const getTaskById = async (req, res) => {
  const { id } = matchedData(req);
  const task = await Task.findByPk(id, {
    include: [Project],
  });
  return res.json(task);
};
export const createTask = async (req, res) => {
  try {
    const body = matchedData(req);
    console.log(body);
    const task = await Task.create({
      ...body,
      projectId: parseInt(body.projectId),
    });
    return res.json(task);
  } catch (error) {
    handleHttpErrors(res, 'ERROR_CREATING_TASK');
  }
};
export const updateTask = async (req, res) => res.json({ a: 4 });
export const deleteTask = async (req, res) => res.json({ a: 5 });
