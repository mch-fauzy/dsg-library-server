import type { Book, BookCreate } from '../models/books.js';
import type { Filter } from '../models/filter.js';
declare class BookRepository {
    static create: (data: BookCreate) => Promise<void>;
    static findManyAndCountByFilter: (filter: Filter) => Promise<{
        books: Book[];
        totalBooks: number;
    }>;
}
export { BookRepository };
