import axios from 'axios';

type TMethod = 'get' | 'post' | 'put' | 'delete';

axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line
    config.headers['x-api-key'] = process.env.NEXT_PUBLIC_KINOSEARCH_API_KEY;

    return config;
  },
  (error) => Promise.reject(error),
);

export const apiHelper = async (
  method: TMethod,
  url: string,
  ...args: any[]
) => {
  const baseUrl = 'https://api.kinopoisk.dev';
  const { data } = await axios[method](`${baseUrl}/${url}`, ...args);
  return data;
};
