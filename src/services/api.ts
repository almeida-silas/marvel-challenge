import axios from 'axios';

const api = axios.create({
  baseURL: '',
  params: {
    ts: '',
    apikey: '',
    hash: '',
  },
});

export default api;
