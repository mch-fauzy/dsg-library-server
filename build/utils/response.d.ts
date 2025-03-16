import type { Context } from 'hono';
import type { StatusCode } from 'hono/utils/http-status';
declare const responseWithMessage: (c: Context, code: StatusCode, message: string) => Response & import("hono").TypedResponse<{
    message: string;
}, import("hono/utils/http-status").ContentfulStatusCode, "json">;
declare const responseWithData: (c: Context, code: StatusCode, data: object) => Response & import("hono").TypedResponse<{
    data: {};
}, import("hono/utils/http-status").ContentfulStatusCode, "json">;
declare const responseWithMetadata: (c: Context, code: StatusCode, data: object, metadata: object) => Response & import("hono").TypedResponse<{
    data: {};
    metadata: {};
}, import("hono/utils/http-status").ContentfulStatusCode, "json">;
export { responseWithMessage, responseWithData, responseWithMetadata };
