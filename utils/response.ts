import type {Context} from 'hono';
import type {StatusCode} from 'hono/utils/http-status';

const responseWithMessage = (c: Context, code: StatusCode, message: string) => {
  c.status(code);
  return c.json({message});
};

const responseWithData = (c: Context, code: StatusCode, data: object) => {
  c.status(code);
  return c.json({data: data});
};

const responseWithMetadata = (
  c: Context,
  code: StatusCode,
  data: object,
  metadata: object,
) => {
  c.status(code);
  return c.json({data: data, metadata: metadata});
};

export {responseWithMessage, responseWithData, responseWithMetadata};
