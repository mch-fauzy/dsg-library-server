import { db } from '../configs/drizzle-client.js';
import { dsgBooks } from '../db/schema.js';
import { sql } from 'drizzle-orm';
import { handleError } from '../utils/error-handler.js';
import { Failure } from '../utils/failure.js';
import { CONSTANT } from '../utils/constant.js';
class BookRepository {
    static create = async (data) => {
        try {
            if (data.isbn) {
                const { totalBooks } = await this.findManyAndCountByFilter({
                    selectFields: [CONSTANT.DB_FIELD.ISBN],
                    filterFields: [
                        {
                            field: CONSTANT.DB_FIELD.ISBN,
                            operator: 'eq',
                            value: data.isbn,
                        },
                    ],
                });
                if (totalBooks > 0)
                    throw Failure.conflict('Catalogue with this ISBN already exists');
            }
            if (data.issn) {
                const { totalBooks } = await this.findManyAndCountByFilter({
                    selectFields: [CONSTANT.DB_FIELD.ISSN],
                    filterFields: [
                        {
                            field: CONSTANT.DB_FIELD.ISSN,
                            operator: 'eq',
                            value: data.issn,
                        },
                    ],
                });
                if (totalBooks > 0)
                    throw Failure.conflict('Catalogue with this ISSN already exists');
            }
            await db.insert(dsgBooks).values(data);
        }
        catch (error) {
            throw handleError({
                operationName: 'BookRepository.create',
                error,
            });
        }
    };
    static findManyAndCountByFilter = async (filter) => {
        try {
            const { selectFields, filterFields, pagination, sorts } = filter;
            // Handle select specific fields
            const columns = selectFields?.length
                ? sql `${sql.join(selectFields.map(field => {
                    const column = dsgBooks[field];
                    if (!column)
                        throw Failure.badRequest(`Invalid select field: ${field}`);
                    return sql `${column}`;
                }), sql `, `)}`
                : sql `*`;
            // Handle filter fields
            const whereClauses = filterFields?.length
                ? filterFields.map(({ field, operator, value }) => {
                    const column = dsgBooks[field];
                    if (!column)
                        throw Failure.badRequest(`Invalid filter field: ${field}`);
                    switch (operator) {
                        case 'eq':
                            return sql `${column} = ${value}`;
                        case 'ne':
                            return sql `${column} != ${value}`;
                        case 'lt':
                            return sql `${column} < ${value}`;
                        case 'lte':
                            return sql `${column} <= ${value}`;
                        case 'gt':
                            return sql `${column} > ${value}`;
                        case 'gte':
                            return sql `${column} >= ${value}`;
                        case 'ilike':
                            return sql `${column} ILIKE ${'%' + value + '%'}`;
                        default:
                            throw Failure.badRequest(`Unsupported operator: ${operator}`);
                    }
                })
                : [];
            const where = whereClauses.length
                ? sql `WHERE ${sql.join(whereClauses, sql ` AND `)}`
                : sql ``;
            // Handle sort
            const orderByClauses = sorts?.length
                ? sorts.map(({ field, order }) => {
                    const column = dsgBooks[field];
                    if (!column)
                        throw Failure.badRequest(`Invalid sort field: ${field}`);
                    return sql `${column} ${sql.raw(order === 'asc' ? 'ASC' : 'DESC')}`;
                })
                : [];
            const orderBy = orderByClauses.length
                ? sql `ORDER BY ${sql.join(orderByClauses, sql `, `)}`
                : sql ``;
            // Handle pagination
            const limit = pagination?.pageSize
                ? sql `LIMIT ${pagination.pageSize}`
                : sql ``;
            const offset = pagination?.pageSize
                ? sql `OFFSET ${(pagination.page - 1) * pagination.pageSize}`
                : sql ``;
            // Compose the final query
            const query = sql `
      SELECT ${columns}
      FROM ${dsgBooks}
      ${where}
      ${orderBy}
      ${limit}
      ${offset}
    `;
            const countQuery = sql `
      SELECT COUNT(*) as count
      FROM ${dsgBooks}
      ${where}
    `;
            const { results, total } = await db.transaction(async (tx) => {
                const results = await tx.execute(query);
                const countResult = await tx.execute(countQuery);
                return {
                    results,
                    total: countResult[0].count,
                };
            });
            return { books: results, totalBooks: total };
        }
        catch (error) {
            throw handleError({
                operationName: 'BookRepository.findManyAndCount',
                error,
            });
        }
    };
}
export { BookRepository };
//# sourceMappingURL=books.js.map