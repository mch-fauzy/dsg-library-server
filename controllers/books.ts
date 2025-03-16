import type {Context} from 'hono';
import {StatusCodes} from 'http-status-codes';

import {responseWithMetadata} from '../utils/response.js';
import {
  BookGetListByFilterSchema,
  type BookGetListByFilterRequest,
} from '../models/dto/books.js';
import {BookService} from '../services/books.js';
import type {QueryRequest} from '../models/dto/query.js';
import {CONSTANT} from '../utils/constant.js';

class BookController {
  static getListByFilter = async (c: Context) => {
    const queryRequest: Partial<QueryRequest> = {
      page: c.req.query('page'),
      pageSize: c.req.query('page_size'),
      sort: c.req.query('sort'),
      order: c.req.query('order'),
      query: c.req.query('query'),
    };

    const request: BookGetListByFilterRequest = {
      page: Number(queryRequest.page) || CONSTANT.QUERY.DEFAULT_PAGE,
      pageSize:
        Number(queryRequest.pageSize) || CONSTANT.QUERY.DEFAULT_PAGE_SIZE,
      sort: queryRequest.sort || CONSTANT.QUERY.DEFAULT_BOOK_SORT,
      order: queryRequest.order || CONSTANT.QUERY.DEFAULT_ORDER,
      query: queryRequest.query,
    };

    const validatedRequest = BookGetListByFilterSchema.parse(request);
    const response = await BookService.getListByFilter(validatedRequest);

    return responseWithMetadata(
      c,
      StatusCodes.OK,
      response.data,
      response.metadata,
    );
  };
}

export {BookController};
