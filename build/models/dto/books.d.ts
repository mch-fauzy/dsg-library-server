import { z } from 'zod';
import type { Metadata } from './metadata.js';
declare const BookGetByNameSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
declare const BookGetListByFilterSchema: z.ZodObject<{
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    sort: z.ZodString;
    order: z.ZodString;
    query: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sort: string;
    page: number;
    pageSize: number;
    order: string;
    query?: string | undefined;
}, {
    sort: string;
    page: number;
    pageSize: number;
    order: string;
    query?: string | undefined;
}>;
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
export { BookGetByNameSchema, BookGetListByFilterSchema, type BookGetByNameRequest, type BookGetListByFilterRequest, type BookListWithMetadataResponse, };
