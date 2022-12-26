import dotenv from 'dotenv';
import Sequelize from 'sequelize';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.NAME_DATABASE,
  process.env.USERNAME_DATABASE,
  process.env.PASSWORD_DATABASE,
  {
    host: process.env.HOST_DATABASE,
    dialect: 'mysql',
  }
);
