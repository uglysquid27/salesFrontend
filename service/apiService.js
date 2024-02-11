// apiService.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPakets = async () => {
    try {
      const response = await axiosInstance.get('paket');
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

// Add other functions for different types of requests (PUT, DELETE, etc.) if needed
