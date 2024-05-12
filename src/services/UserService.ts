import axios from 'axios';
import User from '../models/User';
import axiosRetry from 'axios-retry';

const ENDPOINT = '/api/users/login';

class UserService {
  async login(user: User) {
    return await instance.post<LoginResponse>(ENDPOINT, user);
  }
}

const instance = axios.create({
  baseURL: 'https://api-library-smoky.vercel.app',
});
axiosRetry(instance, { retryDelay: axiosRetry.exponentialDelay, retries: 3 });

interface LoginResponse {
  token: string;
}

export default UserService;
