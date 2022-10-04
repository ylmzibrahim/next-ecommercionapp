import axiosClient from '../apiClient';

export function postUserLogin(data) {
  return axiosClient.post('/auth/login', data);
}