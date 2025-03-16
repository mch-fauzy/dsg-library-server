import { StatusCodes } from 'http-status-codes';
import { responseWithMetadata } from '../utils/response.js';
import { BookGetListByFilterSchema, } from '../models/dto/books.js';
import { BookService } from '../services/books.js';
import { CONSTANT } from '../utils/constant.js';
class BookController {
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
        const validatedRequest = BookGetListByFilterSchema.parse(request);
        const response = await BookService.getListByFilter(validatedRequest);
        return responseWithMetadata(c, StatusCodes.OK, response.data, response.metadata);
    };
}
export { BookController };
//# sourceMappingURL=books.js.map