import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Task } from './task.js';

const Project = sequelize.define(
  'projects',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('active', 'completed'),
      defaultValue: 'active',
    },
  },
  { timestamps: false }
);

Project.hasMany(Task, {
  foreignKey: 'projectId',
  sourceKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetId: 'id',
});

export { Project };
