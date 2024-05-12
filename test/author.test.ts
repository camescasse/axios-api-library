import { describe, expect, it, beforeAll } from 'vitest';
import axios from 'axios';
import authorService from '../src/services/AuthorService';
import Author from '../src/models/Author';

interface LoginResponse {
  token: string;
}

describe('Author Tests', () => {
  describe('POST Methods', () => {
    beforeAll(async () => {
      const response = await axios.post<LoginResponse>('https://api-library-smoky.vercel.app/api/users/login', {
        email: 'user+1@gmail.com',
        password: 'abc123',
      });

      authorService.setToken(response.data.token);
    });

    it('should create an author given a valid name', async () => {
      const author: Author = {
        name: 'juanito',
      };
      const response = await authorService.create(author);

      expect(response.data.name).equals(author.name);
    });
  });
});
