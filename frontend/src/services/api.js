import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.10.254/api/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const BASE_IMAGE_URL = 'http:/172.16.10.254/storage/';

export const getCategories = () => api.get('/categories');
export const getGalleries = () => api.get('/galleries');
export const getPortfolios = () => api.get('/portfolios');
export const getProducts = () => api.get('/products');
export const getLatestProducts = () => api.get('/products/latest');
export const getReviews = () => api.get('/reviews');
export const postReview = (data) => api.post('/reviews', data);
export const getMenusByCategory = (categoryId) =>
  api.get(`/menus?category_id=${categoryId}`);

export const getPackagesByCategory = (categoryId) =>
  api.get(`/packages?category_id=${categoryId}`);


export default api;