import Book from '../models/Book';
import APIClient from './APIClient';

const ENDPOINT = '/api/authors/';
const childDirectory = '/books/';
const api = new APIClient<Book>(ENDPOINT);

class AuthorBookService {
  async getById(authorId: number, bookId: number) {
    return await api.getById(bookId, authorId, childDirectory);
  }

  async getAll(authorId: number) {
    return await api.getAll(authorId, childDirectory);
  }
}

export default AuthorBookService;
