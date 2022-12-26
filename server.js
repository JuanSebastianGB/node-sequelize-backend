import cors from 'cors';
import express from 'express';
import { sequelize } from './src/database/db.js';
import { countries, projects, tasks } from './src/routes/index.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/countries', countries);
app.use('/projects', projects);
app.use('/tasks', tasks);

const PORT = process.env.PORT || 5000;

const main = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log({ error });
  }
};

main();
