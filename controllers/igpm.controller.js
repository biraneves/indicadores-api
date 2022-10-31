import IgpmService from '../services/igpm.service.js';

const getIgpmAcumulado12 = async (_req, res, next) => {
    try {
        res.send(await IgpmService.getIgpmAcumulado12());
    } catch (err) {
        next(err);
    }
};

export default { getIgpmAcumulado12 };
