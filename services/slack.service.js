import IpcaRepository from '../repository/ipca.repository.js';
import IgpmRepository from '../repository/igpm.repository.js';

const getSlackInfo = async () => {
    const ipca = await IpcaRepository.getIpcaAcumulado12();
    const igpm = await IgpmRepository.getIgpmAcumulado12();

    const resposta = {
        response_type: 'in_channel',
        blocks: [
            {
                type: 'header',
                text: {
                    type: 'plain_text',
                    text: 'Índices para reajuste',
                    emoji: true,
                },
            },
            {
                type: 'section',
                text: {
                    type: 'plain_text',
                    text: '📈 Valores acumulados para 12 meses:',
                    emoji: true,
                },
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
                    text: '*Fontes:* IBGE e FGV.',
                },
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
