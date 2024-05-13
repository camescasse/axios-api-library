import 'dotenv/config';
import { beforeAll, describe, expect, it } from 'vitest';
import Book from '../src/models/Book';
import bookService from '../src/services/BookService';
import UserService from '../src/services/UserService';

describe('Book Tests', () => {
  const userService = new UserService();

  beforeAll(async () => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    if (!email || !password) throw new Error('EMAIL and PASSWORD must be defined in your .env');

    const response = await userService.login({
      email: process.env.EMAIL!,
      password: process.env.PASSWORD!,
    });

    bookService.setToken(response.data.token);
  });

  describe('POST Methods', () => {
    it('should create a book given a valid title, description and authorId', async () => {
      const book: Book = {
        id: 0,
        title: 'My newest testing book',
        description: 'No actual content on this book. Surprise.',
        authorId: 1,
        createdAt: '',
        updatedAt: '',
        author: { id: 1, name: 'senior escritor' },
      };

      const response = await bookService.create(book);
    });
  });

  describe('GET Methods', () => {
    it('should return all books', async () => {
      const response = await bookService.getAll();

      expect(response.data).to.be.an('array');
    });

    it('should return a book given an id', async () => {
      const id = 1;

      const response = await bookService.getById(1);

      expect(response.data.id).toEqual(id);
    });
  });

  describe('PUT Methods', () => {
    it('should update a book given a valid title, description and authorId', async () => {
      const book: Book = {
        id: 0,
        title: 'My newest testing book once again',
        description: 'No actual content on this book. Surprise electric boogaloo.',
        authorId: 1,
        createdAt: '',
        updatedAt: '',
        author: { id: 1, name: 'senior escritor' },
      };

      const response = await bookService.create(book);
      const newBook: Book = response.data;

      const updatedBook: Book = {
        id: 0,
        title: 'My newest testing book once again updated',
        description: 'No actual content on this book. Surprise electric boogaloo updated.',
        authorId: 1,
        createdAt: '',
        updatedAt: '',
        author: { id: 1, name: 'senior escritor' },
      };

      const updateResponse = await bookService.override(updatedBook, newBook.id);

      expect(updateResponse.data.description).toEqual(updatedBook.description);
    });
  });

  describe('DEL Methods', () => {
    it('should delete a book given a valid id', async () => {
      const book: Book = {
        id: 0,
        title: 'My newest testing book but forreal',
        description: 'No actual content on this book. Surprise again.',
        authorId: 1,
        createdAt: '',
        updatedAt: '',
        author: { id: 1, name: 'senior escritor' },
      };

      const createdBook = await bookService.create(book);
      const newBook: Book = createdBook.data;

      const deletedBook = await bookService.delete(newBook.id);

      expect(deletedBook.data.id).toEqual(newBook.id);
    });
  });
});
