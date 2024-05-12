import Post from '../models/Post';
import APIClient from './APIClient';

const client = new APIClient<Post>('/posts/');

class PostService {
  getById(id: number) {
    return client.getById(id);
  }

  getAll() {
    return client.getAll();
  }

  create(post: Post) {
    return client.create(post);
  }
}

export default PostService;
