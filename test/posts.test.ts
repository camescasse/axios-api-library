import axios from 'axios';
import { describe, expect, it } from 'vitest';
import Post from '../src/models/Post';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
});

describe('Post tests', () => {
  const endpoint = '/posts/';

  describe('GET methods', () => {
    it('should return a post when given an id', async () => {
      const id = 1;
      const response = await api.get<Post>(endpoint + id);

      expect(response.data.id).equals(id);
    });

    it('should return all posts', async () => {
      const response = await api.get<Post>(endpoint);

      expect(response.data).toBeTruthy();
    });
  });

  describe('POST methods', () => {
    it('should return the same post that is sent', async () => {
      const post: Post = {
        userId: 1,
        id: 1,
        title: 'titulito',
        body: 'el cuerpo del titulito',
      };

      const response = await api.post<Post>(endpoint, post);

      expect(response.data.title).equals(post.title);
    });
  });
});
