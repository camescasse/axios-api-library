import Author from '../models/Author';
import APIClient from './APIClient';

const ENDPOINT = '/api/authors/';

const client = new APIClient<Author>(ENDPOINT);

export default client;
