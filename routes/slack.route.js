import express from 'express';

import SlackController from '../controllers/slack.controller.js';

const router = express.Router();

router.get('/', SlackController.getSlackInfo);

router.use((err, req, res, _next) => {
    console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
});

export default router;
