import axios from 'axios';

const url =
    'https://apisidra.ibge.gov.br/values/t/7060/n1/all/v/2265/p/last%201/c315/7169/d/v2265%202';

const getIpcaAcumulado12 = async () => {
    try {
        const res = await axios.get(url);
        const dados = {
            titulo: 'ipca',
            valor: parseFloat(res.data[1].V),
        };

        return dados;
    } catch (err) {
        throw new Error(err.message);
    }
};

export default { getIpcaAcumulado12 };
