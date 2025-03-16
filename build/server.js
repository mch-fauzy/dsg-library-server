import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { CONFIG } from './configs/config.js';
import { logInfo } from './utils/logger.js';
import { ErrorResponseMiddleware } from './middlewares/error-response.js';
import { router } from './routes/index.js';
const app = new Hono();
app.route('/', router);
// Global error handler
app.onError(ErrorResponseMiddleware.handler);
serve({
    fetch: app.fetch,
    port: Number(CONFIG.SERVER.PORT),
}, info => {
    logInfo(`Server is running on http://localhost:${info.port}`);
});
//# sourceMappingURL=server.js.map