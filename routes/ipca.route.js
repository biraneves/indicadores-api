import express from 'express';

import IpcaController from '../controllers/ipca.controller.js';

const router = express.Router();

router.get('/', IpcaController.getIpcaAcumulado12);

router.use((err, req, res, _next) => {
    console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
});

export default router;
