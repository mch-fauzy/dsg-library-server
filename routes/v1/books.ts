import {Hono} from 'hono';
import {BookController} from '../../controllers/books.js';

const bookRouterV1 = new Hono();

bookRouterV1.get('/books', BookController.getListByFilter);
bookRouterV1.post('/books', BookController.create);
bookRouterV1.patch('/books/:id', BookController.updateById);

export {bookRouterV1};
