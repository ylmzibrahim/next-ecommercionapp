import axiosClient from '../apiAuthedClient';

export function getAllProducts() {
  return axiosClient.get('/products');
}

export function getASingleProduct(id) {
  return axiosClient.get(`/products/${id}`);
}

export function getLimitResults(query = "") {
  return axiosClient.get(`/products${query}`);
}

export function getSortResults(query = "") {
  return axiosClient.get(`/products${query}`);
}

export function getAllCategories() {
  return axiosClient.get(`/products/categories`);
}

export function getInCategory(category) {
  return axiosClient.get(`/products/category/${category}`);
}

export function postAddNewProduct(data) {
  return axiosClient.post('/products', data);
}

export function updateAProduct(id, data) {
  return axiosClient.put(`/products/${id}`, data);
}

export function deleteAProduct(id) {
  return axiosClient.delete(`/products/${id}`);
}