import IpcaService from '../services/ipca.service.js';

const getIpcaAcumulado12 = async (_req, res, next) => {
    try {
        res.send(await IpcaService.getIpcaAcumulado12());
    } catch (err) {
        next(err);
    }
};

export default { getIpcaAcumulado12 };
