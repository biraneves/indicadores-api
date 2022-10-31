import IpcaRepository from '../repository/ipca.repository.js';
import IgpmRepository from '../repository/igpm.repository.js';

const getSlackInfo = async () => {
    const ipca = await IpcaRepository.getIpcaAcumulado12();
    const igpm = await IgpmRepository.getIgpmAcumulado12();

    const resposta = `
        *Estes são os valores acumulados para 12 meses:*
        * *IPCA:* ${ipca.ipca12}%
        * *IGP-M:* ${igpm.igpm12}%
         
        _(Este é um recurso experimental! Em caso de dúvida, procure seu líder.)_
    `;

    return resposta;
};

export default { getSlackInfo };
