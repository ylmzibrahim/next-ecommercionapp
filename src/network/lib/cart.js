import axiosClient from '../apiAuthedClient';

export function getAllCarts() {
  return axiosClient.get('/carts');
}

export function getASingleCart(id) {
  return axiosClient.get(`/carts/${id}`);
}

export function getLimitResults(query = '') {
  return axiosClient.get(`/carts${query}`);
}

export function getSortResults(query = '') {
  return axiosClient.get(`/carts${query}`);
}

export function getInDataRange(query = '') {
  return axiosClient.get(`/carts${query}`);
}

export function getUserCart(id) {
  return axiosClient.get(`/carts/user/${id}`);
}

export function postAddNewCart(data) {
  return axiosClient.post('/carts', data);
}

export function updateACart(id, data) {
  return axiosClient.put(`/carts/${id}`, data);
}

export function deleteACart(id) {
  return axiosClient.delete(`/carts/${id}`);
}
