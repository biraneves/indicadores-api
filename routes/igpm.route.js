import express from 'express';

import IgpmController from '../controllers/igpm.controller.js';

const router = express.Router();

router.get('/', IgpmController.getIgpmAcumulado12);

router.use((err, req, res, _next) => {
    console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
});

export default router;
