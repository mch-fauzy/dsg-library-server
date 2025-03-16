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

type BookGetByNameRequest = z.infer<typeof BookGetByNameSchema>;
type BookGetListByFilterRequest = z.infer<typeof BookGetListByFilterSchema>;

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
  type BookGetByNameRequest,
  type BookGetListByFilterRequest,
  type BookListWithMetadataResponse,
};
