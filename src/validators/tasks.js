import { check } from 'express-validator';
import validateResults from '../utilities/handleValidator.js';

const validatorCreateTask = [
  check('name').exists().isLength({ min: 3 }).notEmpty(),
  check('projectId').exists().isInt().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

const validatorGetTaskById = [
  check('id').exists().isInt().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

export { validatorCreateTask, validatorGetTaskById };
