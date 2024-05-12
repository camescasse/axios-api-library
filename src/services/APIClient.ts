import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';
import 'dotenv/config';

class APIClient<T> {
  endpoint: string;
  token: string;
  instance: AxiosInstance;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    const BASE_URL = process.env.BASE_URL;
    if (!BASE_URL) throw new Error('BASE_URL must be defined in your .env');

    this.instance = axios.create({
      baseURL: BASE_URL,
    });
    axiosRetry(this.instance, { retryDelay: axiosRetry.exponentialDelay, retries: 3 });
  }

  setToken(token: string) {
    this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async getById(id: number) {
    return await this.instance.get<T>(this.endpoint + id);
  }

  async getAll() {
    return await this.instance.get<T[]>(this.endpoint);
  }

  async create(data: T) {
    return await this.instance.post<T>(this.endpoint, data);
  }
}

export default APIClient;
