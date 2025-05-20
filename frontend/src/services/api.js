import axios from 'axios';

// Buat instance axios dengan konfigurasi dasar
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Base URL API Laravel kamu
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // aktifkan jika butuh cookie/session auth
});

// Fungsi API untuk masing-masing endpoint, supaya rapi dan reuseable
export const getCategories = () => api.get('/categories');
export const getGalleries = () => api.get('/galleries');
export const getPortfolios = () => api.get('/portfolios');
export const getProducts = () => api.get('/products');
export const getReviews = () => api.get('/reviews');

export default api;
