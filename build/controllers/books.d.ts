import type { Context } from 'hono';
declare class BookController {
    static getListByFilter: (c: Context) => Promise<Response & import("hono").TypedResponse<{
        data: {};
        metadata: {};
    }, import("hono/utils/http-status").ContentfulStatusCode, "json">>;
}
export { BookController };
