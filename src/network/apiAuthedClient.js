import axios from 'axios';

const getCookie = (name) => {
  if (typeof window === 'undefined') return null;
  if (typeof window !== 'undefined') {
    const matches = document.cookie.match(
      new RegExp(
        `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  return null;
};

const axiosAuthedClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('token')}`,
  },
});

axiosAuthedClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const res = error.response;
    console.error(`Looks like there was a problem. Status Code: ${res.status}`);
    return Promise.reject(error);
  },
);

export default axiosAuthedClient;
