import express from 'express';

import ipcaRouter from './routes/ipca.route.js';
import igpmRouter from './routes/igpm.route.js';

const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/ipca', ipcaRouter);
app.use('/igpm', igpmRouter);

app.listen(PORT, () => console.log('API listening on http://localhost:3000'));
