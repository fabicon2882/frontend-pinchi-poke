import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_API_PUBLIC_URL,
});

export default axiosConfig;
