import type { BookCreateRequest, BookDeleteByIdRequest, BookGetListByFilterRequest, BookListWithMetadataResponse, BookUpdateByIdRequest } from '../models/dto/books.js';
declare class BookService {
    static create: (req: BookCreateRequest) => Promise<string>;
    static updatedById: (req: BookUpdateByIdRequest) => Promise<string>;
    static deleteById: (req: BookDeleteByIdRequest) => Promise<string>;
    static getListByFilter: (req: BookGetListByFilterRequest) => Promise<BookListWithMetadataResponse>;
}
export { BookService };
