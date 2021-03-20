import { BASE_URL, PRIVATE_KEY, PUBLIC_KEY } from '@env';

import crypto from 'crypto-js';
import axios from 'axios';

const api = axios.create({
  baseURL: BASE_URL,

  params: {
    ts: `${new Date()}`,
    apikey: PUBLIC_KEY,
    hash: crypto.MD5(new Date() + PRIVATE_KEY + PUBLIC_KEY).toString(),
  },
});

export default api;
