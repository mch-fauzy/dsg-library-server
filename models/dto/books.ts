import {z} from 'zod';

import type {Metadata} from './metadata.js';

const BookGetByNameSchema = z.object({
  name: z.string().min(1, 'Name is required'),
});

const BookGetListByFilterSchema = z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  sort: z.string(),
  order: z.string(),
  query: z.string().optional(),
});

const BookCreateSchema = z.object({
  name: z.string(),
  category: z.string(),
  publisher: z.string(),
  isbn: z
    .string()
    .length(10, {message: 'ISBN must be 10 or 13 characters long'})
    .or(
      z.string().length(13, {message: 'ISBN must be 10 or 13 characters long'}),
    )
    .nullable()
    .optional(),
  issn: z
    .string()
    .length(8, {message: 'ISSN must be exactly 8 characters long'})
    .nullable()
    .optional(),
  author: z.string(),
  year: z
    .number()
    .int()
    .min(1000, {message: 'Year must be at least 1000'}) // Ensures a realistic year
    .max(new Date().getFullYear(), {message: 'Year cannot be in the future'}),
  price: z.number().min(0, {message: 'Price must be a positive number'}), // Ensures no negative price
  description: z.string().nullable().optional(),
});

const BookUpdateByIdSchema = z
  .object({
    id: z.number().int().min(1, {message: 'Id must be at least 1'}),
    name: z.string().optional(),
    category: z.string().optional(),
    publisher: z.string().optional(),
    isbn: z
      .string()
      .length(10, {message: 'ISBN must be 10 or 13 characters long'})
      .or(
        z
          .string()
          .length(13, {message: 'ISBN must be 10 or 13 characters long'}),
      )
      .nullable()
      .optional(),
    issn: z
      .string()
      .length(8, {message: 'ISSN must be exactly 8 characters long'})
      .nullable()
      .optional(),
    author: z.string().optional(),
    year: z
      .number()
      .int()
      .min(1000, {message: 'Year must be at least 1000'}) // Ensures a realistic year
      .max(new Date().getFullYear(), {message: 'Year cannot be in the future'})
      .optional(),
    price: z
      .number()
      .min(0, {message: 'Price must be a positive number'})
      .optional(), // Ensures no negative price
    description: z.string().nullable().optional(),
  })
  .refine(
    data =>
      Object.keys(data).some(
        key =>
          key !== 'id' &&
          data[key as keyof typeof data] !== undefined &&
          data[key as keyof typeof data] !== null,
      ),
    {
      message: 'At least one field must be provided for update',
    },
  );

type BookGetByNameRequest = z.infer<typeof BookGetByNameSchema>;
type BookGetListByFilterRequest = z.infer<typeof BookGetListByFilterSchema>;
type BookCreateRequest = z.infer<typeof BookCreateSchema>;
type BookUpdateByIdRequest = z.infer<typeof BookUpdateByIdSchema>;

interface BookResponse {
  name: string;
  description: string | null;
  price: number;
  isbn: string | null;
  issn: string | null;
  category: string;
  publisher: string;
  author: string;
  year: number;
}

interface BookListWithMetadataResponse {
  data: BookResponse[];
  metadata: Metadata;
}

export {
  BookGetByNameSchema,
  BookGetListByFilterSchema,
  BookCreateSchema,
  BookUpdateByIdSchema,
  type BookGetByNameRequest,
  type BookGetListByFilterRequest,
  type BookListWithMetadataResponse,
  type BookCreateRequest,
  type BookUpdateByIdRequest,
};
