import { z } from 'zod';
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
export { BookGetByNameSchema, BookGetListByFilterSchema, };
//# sourceMappingURL=books.js.map