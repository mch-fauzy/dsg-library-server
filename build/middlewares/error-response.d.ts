import type { Context } from 'hono';
declare class ErrorResponseMiddleware {
    static handler: (error: unknown, c: Context) => Response & import("hono").TypedResponse<{
        message: string;
    }, import("hono/utils/http-status").ContentfulStatusCode, "json">;
}
export { ErrorResponseMiddleware };
