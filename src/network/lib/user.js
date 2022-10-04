import axiosClient from '../apiAuthedClient';

export function getAllUsers() {
  return axiosClient.get('/users');
}

export function getASingleUser(id) {
  return axiosClient.get(`/users/${id}`);
}

export function getLimitResults(query = "") {
  return axiosClient.get(`/users${query}`);
}

export function getSortResults(query = "") {
  return axiosClient.get(`/users${query}`);
}

export function postAddNewUser(data) {
  return axiosClient.post('/users', data);
}

export function updateAUser(id, data) {
  return axiosClient.put(`/users/${id}`, data);
}

export function deleteAUser(id) {
  return axiosClient.delete(`/users/${id}`);
}