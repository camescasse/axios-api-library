import { describe, expect, it, beforeAll } from 'vitest';
import authorService from '../src/services/AuthorService';
import UserService from '../src/services/UserService';
import Author from '../src/models/Author';
import 'dotenv/config';

describe('Author Tests', () => {
  const userService = new UserService();

  beforeAll(async () => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    if (!email || !password) throw new Error('EMAIL and PASSWORD must be defined in your .env');

    const response = await userService.login({
      email: process.env.EMAIL!,
      password: process.env.PASSWORD!,
    });

    authorService.setToken(response.data.token);
  });

  describe('POST Methods', () => {
    it.only('should create an author given a valid name', async () => {
      const author: Author = {
        name: 'juanito',
      };

      const response = await authorService.create(author);

      expect(response.data.name).equals(author.name);
    });
  });
});
