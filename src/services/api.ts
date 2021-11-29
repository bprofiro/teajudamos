import axios from 'axios';

const api = axios.create({
  baseURL: 'https://provi-teajudamos.herokuapp.com/',
});

export default api;
