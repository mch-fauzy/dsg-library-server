import {
  pgTable,
  integer,
  text,
  doublePrecision,
  timestamp,
} from 'drizzle-orm/pg-core';

const dsgBooks = pgTable('dsg_books', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  category: text().notNull(),
  publisher: text().notNull(),
  isbn: text().unique(),
  issn: text().unique(),
  author: text().notNull(),
  year: integer().notNull(),
  price: doublePrecision().notNull(),
  description: text(),
  createdAt: timestamp('created_at', {withTimezone: true})
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', {withTimezone: true}),
});

export {dsgBooks};
