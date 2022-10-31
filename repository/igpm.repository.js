import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://paineldeindices.com.br/indice/igpm/';

const getIgpmAcumulado12 = async () => {
    try {
        const resultado = await axios.get(url);
        const html = resultado.data;
        const $ = cheerio.load(html);
        const cards = $('p.card-indice-numero.text-center');

        const indices = [];

        cards.each((idx, el) => {
            indices.push(parseFloat($(el).text().trim().replace(',', '.')));
        });

        const dados = {
            titulo: 'igp-m',
            igpm12: indices[1],
        };

        return dados;
    } catch (err) {
        throw new Error(err.message);
    }
};

export default { getIgpmAcumulado12 };
