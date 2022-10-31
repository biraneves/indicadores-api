import IgpmAcumulado12 from '../repository/igpm.repository.js';

const getIgpmAcumulado12 = async () => {
    return await IgpmAcumulado12.getIgpmAcumulado12();
};

export default { getIgpmAcumulado12 };
