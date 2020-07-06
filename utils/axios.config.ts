import axios from 'axios';

const axiosRequest = axios.create({
  baseURL: 'https://papahet.herokuapp.com',
});

export default axiosRequest;
