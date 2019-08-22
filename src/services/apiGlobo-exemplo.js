import axios from 'axios';

const apiGlobo = axios.create({
    baseURL: 'endereço url',
    headers: {
        'nometoken': 'token',
        'nomecliente': 'id'
    }
})

export default apiGlobo;

