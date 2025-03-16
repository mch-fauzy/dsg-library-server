import type { Context } from 'hono';
declare class BookController {
    static create: (c: Context) => Promise<Response & import("hono").TypedResponse<{
        message: string;
    }, import("hono/utils/http-status").ContentfulStatusCode, "json">>;
    static updateById: (c: Context) => Promise<Response & import("hono").TypedResponse<{
        message: string;
    }, import("hono/utils/http-status").ContentfulStatusCode, "json">>;
    static deleteById: (c: Context) => Promise<Response & import("hono").TypedResponse<{
        message: string;
    }, import("hono/utils/http-status").ContentfulStatusCode, "json">>;
    static getListByFilter: (c: Context) => Promise<Response & import("hono").TypedResponse<{
        data: {};
        metadata: {};
    }, import("hono/utils/http-status").ContentfulStatusCode, "json">>;
}
export { BookController };
