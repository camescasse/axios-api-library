import axios from 'axios';
import Post from '../models/Post';

const endpoint = '/posts/';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

export default class PostService {
  async getById(id: number) {
    return await api.get<Post>(endpoint + id);
  }

  async getAll() {
    return await api.get<Post>(endpoint);
  }

  async create(post: Post) {
    return await api.post<Post>(endpoint, post);
  }
}
