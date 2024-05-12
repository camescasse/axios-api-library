import { describe, expect, it, beforeAll } from 'vitest';
import axios from 'axios';
import authorService from '../src/services/AuthorService';
import UserService from '../src/services/UserService';
import Author from '../src/models/Author';

describe('Author Tests', () => {
  const userService = new UserService();

  beforeAll(async () => {
    const response = await userService.login({
      email: 'user+1@gmail.com',
      password: 'abc123',
    });

    authorService.setToken(response.data.token);
  });

  describe('POST Methods', () => {
    it('should create an author given a valid name', async () => {
      const author: Author = {
        name: 'juanito',
      };

      const response = await authorService.create(author);

      expect(response.data.name).equals(author.name);
    });
  });
});
