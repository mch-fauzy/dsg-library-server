import type {Context} from 'hono';
import {StatusCodes} from 'http-status-codes';

import {responseWithMessage, responseWithMetadata} from '../utils/response.js';
import {
  BookCreateSchema,
  BookGetListByFilterSchema,
  BookUpdateByIdSchema,
  type BookCreateRequest,
  type BookGetListByFilterRequest,
  type BookUpdateByIdRequest,
} from '../models/dto/books.js';
import {BookService} from '../services/books.js';
import type {QueryRequest} from '../models/dto/query.js';
import {CONSTANT} from '../utils/constant.js';

class BookController {
  static create = async (c: Context) => {
    const body = await c.req.json();
    const request: BookCreateRequest = {
      name: body.name,
      description: body.description,
      price: body.price,
      isbn: body.isbn,
      issn: body.issn,
      category: body.category,
      publisher: body.publisher,
      author: body.author,
      year: body.year,
    };

    const validatedRequest = await BookCreateSchema.parseAsync(request);
    const response = await BookService.create(validatedRequest);

    return responseWithMessage(c, StatusCodes.CREATED, response);
  };

  static updateById = async (c: Context) => {
    const body = await c.req.json();
    const request: BookUpdateByIdRequest = {
      id: Number(c.req.param('id')),
      name: body.name,
      description: body.description,
      price: body.price,
      isbn: body.isbn,
      issn: body.issn,
      category: body.category,
      publisher: body.publisher,
      author: body.author,
      year: body.year,
    };

    const validatedRequest = await BookUpdateByIdSchema.parseAsync(request);
    const response = await BookService.updatedById(validatedRequest);

    return responseWithMessage(c, StatusCodes.OK, response);
  };

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

    const validatedRequest =
      await BookGetListByFilterSchema.parseAsync(request);
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
