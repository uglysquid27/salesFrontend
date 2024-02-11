// apiService.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPakets = async () => {
    try {
      const response = await axiosInstance.get('paket');
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

