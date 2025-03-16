import type { Book, BookCreate, BookPrimaryId, BookUpdateById } from '../models/books.js';
import type { Filter } from '../models/filter.js';
declare class BookRepository {
    static create: (data: BookCreate) => Promise<void>;
    static updateById: (params: BookUpdateById) => Promise<void>;
    static deleteById: (primaryId: BookPrimaryId) => Promise<void>;
    static findManyAndCountByFilter: (filter: Filter) => Promise<{
        books: Book[];
        totalBooks: number;
    }>;
    static existsById: (primaryId: BookPrimaryId) => Promise<boolean>;
}
export { BookRepository };
