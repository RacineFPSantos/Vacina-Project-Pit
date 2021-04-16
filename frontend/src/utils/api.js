import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'http://localhost:3005/',
});

export default myAxios;
