import 'dotenv/config';
import { beforeAll, describe, expect, it } from 'vitest';
import Author from '../src/models/Author';
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
    it('should create an author given a valid name', async () => {
      const author: Author = {
        name: 'juanito',
        id: 0,
      };

      const response = await authorService.create(author);

      expect(response.data.name).toEqual(author.name);
    });
  });

  describe('GET Methods', () => {
    it('should return all authors', async () => {
      const response = await authorService.getAll();

      expect(response.data).to.be.an('array');
    });

    it('should return an author given an id', async () => {
      const id = 1;

      const response = await authorService.getById(id);

      expect(response.data.id).toEqual(id);
    });
  });

  describe('PUT Methods', () => {
    it('should update an author given a valid id and name', async () => {
      const author: Author = {
        name: 'juanito alimania',
        id: 0,
      };

      const response = await authorService.create(author);
      const newAuthor: Author = response.data;

      const updatedAuthor: Author = {
        name: 'juanito alimania actualizao',
        id: 0,
      };

      const updateResponse = await authorService.override(updatedAuthor, newAuthor.id);

      expect(updateResponse.data.name).toEqual(updatedAuthor.name);
    });
  });

  describe('DEL Methods', () => {
    it('should delete an author given a valid id', async () => {
      const author: Author = {
        name: 'juanote alimania',
        id: 0,
      };

      const createdAuthor = await authorService.create(author);
      const newAuthor: Author = createdAuthor.data;

      const deletedAuthor = await authorService.delete(newAuthor.id);
    });
  });
});
