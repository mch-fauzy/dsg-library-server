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
declare const BookCreateSchema: z.ZodObject<{
    name: z.ZodString;
    category: z.ZodString;
    publisher: z.ZodString;
    isbn: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    issn: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    author: z.ZodString;
    year: z.ZodNumber;
    price: z.ZodNumber;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    price: number;
    category: string;
    author: string;
    year: number;
    publisher: string;
    isbn?: string | null | undefined;
    issn?: string | null | undefined;
    description?: string | null | undefined;
}, {
    name: string;
    price: number;
    category: string;
    author: string;
    year: number;
    publisher: string;
    isbn?: string | null | undefined;
    issn?: string | null | undefined;
    description?: string | null | undefined;
}>;
declare const BookUpdateByIdSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    publisher: z.ZodOptional<z.ZodString>;
    isbn: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    issn: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    author: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodNumber>;
    price: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: number;
    name?: string | undefined;
    isbn?: string | null | undefined;
    issn?: string | null | undefined;
    description?: string | null | undefined;
    price?: number | undefined;
    category?: string | undefined;
    author?: string | undefined;
    year?: number | undefined;
    publisher?: string | undefined;
}, {
    id: number;
    name?: string | undefined;
    isbn?: string | null | undefined;
    issn?: string | null | undefined;
    description?: string | null | undefined;
    price?: number | undefined;
    category?: string | undefined;
    author?: string | undefined;
    year?: number | undefined;
    publisher?: string | undefined;
}>, {
    id: number;
    name?: string | undefined;
    isbn?: string | null | undefined;
    issn?: string | null | undefined;
    description?: string | null | undefined;
    price?: number | undefined;
    category?: string | undefined;
    author?: string | undefined;
    year?: number | undefined;
    publisher?: string | undefined;
}, {
    id: number;
    name?: string | undefined;
    isbn?: string | null | undefined;
    issn?: string | null | undefined;
    description?: string | null | undefined;
    price?: number | undefined;
    category?: string | undefined;
    author?: string | undefined;
    year?: number | undefined;
    publisher?: string | undefined;
}>;
declare const BookDeleteByIdSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
type BookGetByNameRequest = z.infer<typeof BookGetByNameSchema>;
type BookGetListByFilterRequest = z.infer<typeof BookGetListByFilterSchema>;
type BookCreateRequest = z.infer<typeof BookCreateSchema>;
type BookUpdateByIdRequest = z.infer<typeof BookUpdateByIdSchema>;
type BookDeleteByIdRequest = z.infer<typeof BookDeleteByIdSchema>;
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
export { BookGetByNameSchema, BookGetListByFilterSchema, BookCreateSchema, BookUpdateByIdSchema, BookDeleteByIdSchema, type BookGetByNameRequest, type BookGetListByFilterRequest, type BookListWithMetadataResponse, type BookCreateRequest, type BookUpdateByIdRequest, type BookDeleteByIdRequest, };
