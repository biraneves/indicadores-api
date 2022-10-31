import axios from 'axios';

const url =
    'https://apisidra.ibge.gov.br/values/t/7060/n1/all/v/2265/p/last%201/c315/7169/d/v2265%202';

const getData = async (url) => {
    try {
        return await axios.get(url);
    } catch (err) {
        return { error: err.message };
    }
};

console.log(await getData(url));
