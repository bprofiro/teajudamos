import axios from 'axios';

const api = axios.create({
  baseURL: 'http://teapoio-env.eba-bmyypvgp.us-east-2.elasticbeanstalk.com/',
});

export default api;
