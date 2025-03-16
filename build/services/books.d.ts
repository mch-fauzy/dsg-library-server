import type { BookGetListByFilterRequest, BookListWithMetadataResponse } from '../models/dto/books.js';
declare class BookService {
    static getListByFilter: (req: BookGetListByFilterRequest) => Promise<BookListWithMetadataResponse>;
}
export { BookService };
