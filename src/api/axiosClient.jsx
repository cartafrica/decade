import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://cartafrica.nw.r.appspot.com', // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to inject the auth token for all requests
axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  // config.headers.Authorization = token ? `Bearer ${token}` : '';
  config.headers['x-access-token'] = token ? token : '';
  return config;
});

export default axiosClient;
