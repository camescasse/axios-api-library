import axios from 'axios';
import axiosRetry from 'axios-retry';

const instance = axios.create({
  baseURL: 'https://api-library-smoky.vercel.app',
});
axiosRetry(instance, { retryDelay: axiosRetry.exponentialDelay, retries: 3 });

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

  async delete(id: number) {
    return await instance.delete<T>(this.endpoint + id);
  }

  async update(data: T, id: number) {
    return await instance.patch<T>(this.endpoint + id, data);
  }

  async override(data: T, id: number) {
    return await instance.put<T>(this.endpoint + id, data);
  }
}

export default APIClient;
