import type { dsgBooks } from '../db/schema.js';
type Book = typeof dsgBooks.$inferSelect;
type BookCreate = Pick<typeof dsgBooks.$inferInsert, 'name' | 'category' | 'publisher' | 'isbn' | 'issn' | 'author' | 'year' | 'price' | 'description'>;
export type { Book, BookCreate };
