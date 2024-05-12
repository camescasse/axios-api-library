import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
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
