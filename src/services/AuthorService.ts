import Author from '../models/Author';
import APIClient from './APIClient';

const client = new APIClient<Author>('/api/authors');

export default client;
