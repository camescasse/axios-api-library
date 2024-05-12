import { describe, expect, it } from 'vitest';
import Post from '../src/models/Post';
import PostService from '../src/services/PostService';

describe('Post tests', () => {
  const service = new PostService();
  describe('GET methods', () => {
    it('should return a post when given an id', async () => {
      const id = 1;
      const response = await service.getById(1);

      expect(response.data.id).equals(1);
    });

    it('should return all posts', async () => {
      const response = await service.getAll();

      expect(response.data).to.be.an('array');
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

      const response = await service.create(post);

      expect(response.data.title).equals(post.title);
    });
  });
});
