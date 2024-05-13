import APIClient from './APIClient';
import Book from '../models/Book';

const ENDPOINT = '/api/books/';

const client = new APIClient<Book>(ENDPOINT);

export default client;
