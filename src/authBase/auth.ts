import axios from 'axios';

const authApi = axios.create({
  baseURL: 'http://localhost:3000', // dev (use https://api.momentapp.com for prod )
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default authApi;
