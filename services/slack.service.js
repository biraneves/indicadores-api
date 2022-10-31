import IpcaRepository from '../repository/ipca.repository.js';
import IgpmRepository from '../repository/igpm.repository.js';

const getSlackInfo = async () => {
    const ipca = await IpcaRepository.getIpcaAcumulado12();
    const igpm = await IgpmRepository.getIgpmAcumulado12();

    const resposta = `
        *Estes são os valores acumulados para 12 meses:*
        * *IPCA:* ${ipca.ipca12}%
        * *IGP-M:* ${igpm.igpm12}%
    `;

    // const resposta = {
    //     blocks: [
    //         {
    //             type: 'section',
    //             text: {
    //                 type: 'mrkdwon',
    //                 text: '*Estes são os valores acumulados para 12 meses:*',
    //             },
    //         },
    //         {
    //             type: 'section',
    //             text: {
    //                 type: 'mrkdwn',
    //                 text: '* *IPCA:* ' + ipca.ipca12 + '%'.replace('.', ','),
    //             },
    //         },
    //         {
    //             type: 'section',
    //             text: {
    //                 type: 'mrkdwn',
    //                 text: '* *IGP-M:* ' + igpm.igpm12 + '%'.replace('.', ','),
    //             },
    //         },
    //     ],
    // };

    return resposta;
};

export default { getSlackInfo };
