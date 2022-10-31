import IpcaRepository from '../repository/ipca.repository.js';

const getIpcaAcumulado12 = async () => {
    return await IpcaRepository.getIpcaAcumulado12();
};

export default { getIpcaAcumulado12 };
