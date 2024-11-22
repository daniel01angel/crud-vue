import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Cambia la URL según el endpoint raíz de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
