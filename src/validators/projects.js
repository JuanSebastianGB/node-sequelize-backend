import { check } from 'express-validator';
import validateResults from '../utilities/handleValidator.js';

const validatorCreateProject = [
  check('name').exists().isLength({ min: 3 }).notEmpty(),
  check('description').exists().isLength({ min: 3 }).notEmpty(),
  check('priority').exists().isInt({ min: 1, max: 3 }).notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

const validatorGetProjectById = [
  check('id').exists().isInt().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

export { validatorCreateProject, validatorGetProjectById };
