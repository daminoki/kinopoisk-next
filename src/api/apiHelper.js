import axios from 'axios';

axios.interceptors.request.use(
  config => {
    // eslint-disable-next-line
    config.headers['x-api-key'] = process.env.NEXT_PUBLIC_KINOSEARCH_API_KEY;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const apiHelper = async (method, url, body) => {
  const baseUrl = 'https://api.kinopoisk.dev';

  try {
    const {data} = await axios[method](`${baseUrl}/${url}`, body);

    return data;
  } catch (err) {
    alert(err);
    return null;
  }
};