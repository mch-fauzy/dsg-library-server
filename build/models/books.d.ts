import type { dsgBooks } from '../db/schema.js';
type Book = typeof dsgBooks.$inferSelect;
type BookCreate = Pick<typeof dsgBooks.$inferInsert, 'name' | 'category' | 'publisher' | 'isbn' | 'issn' | 'author' | 'year' | 'price' | 'description'>;
type BookUpdate = Pick<typeof dsgBooks.$inferInsert, 'name' | 'category' | 'publisher' | 'isbn' | 'issn' | 'author' | 'year' | 'price' | 'description' | 'updatedAt'>;
type BookPrimaryId = Pick<typeof dsgBooks.$inferSelect, 'id'>;
interface BookUpdateById {
    id: number;
    data: Partial<BookUpdate>;
}
export type { Book, BookCreate, BookPrimaryId, BookUpdateById };
