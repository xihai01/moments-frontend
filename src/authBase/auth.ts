import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://casa-qa.herokuapp.com/', // Ruby for Good CASA QA
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default authApi;
