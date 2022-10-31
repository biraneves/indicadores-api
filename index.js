import express from 'express';
import cors from 'cors';

import ipcaRouter from './routes/ipca.route.js';
import igpmRouter from './routes/igpm.route.js';
import slackRouter from './routes/slack.route.js';

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/ipca', ipcaRouter);
app.use('/igpm', igpmRouter);
app.use('/slack', slackRouter);

app.listen(process.env.PORT || PORT, () =>
    console.log(`API listening on port ${PORT}`),
);
