import IpcaRepository from '../repository/ipca.repository.js';
import IgpmRepository from '../repository/igpm.repository.js';

const getSlackInfo = async () => {
    const ipca = await IpcaRepository.getIpcaAcumulado12();
    const igpm = await IgpmRepository.getIgpmAcumulado12();

    const resposta = {
        blocks: [
            {
                type: 'section',
                text: {
                    type: 'plain_text',
                    text: 'Estes são os valores acumulados para 12 meses: 📈',
                    emoji: true,
                },
            },
            {
                type: 'divider',
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: '- *IPCA:* ' + ipca.ipca12 + '%',
                },
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: '- *IGP-M:* ' + igpm.igpm12 + '%',
                },
            },
            {
                type: 'divider',
            },
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: '_(Este é um recurso experimental. Em caso de dúvida, procure seu líder!)_',
                },
            },
        ],
    };

    return resposta;
};

export default { getSlackInfo };
