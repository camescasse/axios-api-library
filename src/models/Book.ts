import Author from './Author';

interface Book {
  id: number;
  title: string;
  description: string;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
}

export default Book;
