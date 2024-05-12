import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: 'https://api-library-smoky.vercel.app',
  timeout: 1000,
});

class APIClient<T> {
  endpoint: string;
  token: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  setToken(token: string) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async getById(id: number) {
    return await instance.get<T>(this.endpoint + id);
  }

  async getAll() {
    return await instance.get<T[]>(this.endpoint);
  }

  async create(data: T) {
    return await instance.post<T>(this.endpoint, data);
  }
}

export default APIClient;
