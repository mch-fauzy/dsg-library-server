import { Hono } from 'hono';
import { bookRouterV1 } from './v1/books.js';
const router = new Hono();
router.route('/v1', bookRouterV1);
export { router };
//# sourceMappingURL=index.js.map