import { StatusCodes } from 'http-status-codes';
import { responseWithMessage, responseWithMetadata } from '../utils/response.js';
import { BookCreateSchema, BookDeleteByIdSchema, BookGetListByFilterSchema, BookUpdateByIdSchema, } from '../models/dto/books.js';
import { BookService } from '../services/books.js';
import { CONSTANT } from '../utils/constant.js';
class BookController {
    static create = async (c) => {
        const body = await c.req.json();
        const request = {
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
    static updateById = async (c) => {
        const body = await c.req.json();
        const request = {
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
    static deleteById = async (c) => {
        const request = {
            id: Number(c.req.param('id')),
        };
        const validatedRequest = await BookDeleteByIdSchema.parseAsync(request);
        const response = await BookService.deleteById(validatedRequest);
        return responseWithMessage(c, StatusCodes.OK, response);
    };
    static getListByFilter = async (c) => {
        const queryRequest = {
            page: c.req.query('page'),
            pageSize: c.req.query('page_size'),
            sort: c.req.query('sort'),
            order: c.req.query('order'),
            query: c.req.query('query'),
        };
        const request = {
            page: Number(queryRequest.page) || CONSTANT.QUERY.DEFAULT_PAGE,
            pageSize: Number(queryRequest.pageSize) || CONSTANT.QUERY.DEFAULT_PAGE_SIZE,
            sort: queryRequest.sort || CONSTANT.QUERY.DEFAULT_BOOK_SORT,
            order: queryRequest.order || CONSTANT.QUERY.DEFAULT_ORDER,
            query: queryRequest.query,
        };
        const validatedRequest = await BookGetListByFilterSchema.parseAsync(request);
        const response = await BookService.getListByFilter(validatedRequest);
        return responseWithMetadata(c, StatusCodes.OK, response.data, response.metadata);
    };
}
export { BookController };
//# sourceMappingURL=books.js.map