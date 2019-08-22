import axios from 'axios';

const apiTvRioSul = axios.create({
    baseURL: 'http://localhost:3333'
})

export default apiTvRioSul;

