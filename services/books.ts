import type {
  BookCreateRequest,
  BookGetListByFilterRequest,
  BookListWithMetadataResponse,
  BookUpdateByIdRequest,
} from '../models/dto/books.js';
import type {Filter} from '../models/filter.js';
import {BookRepository} from '../repositories/books.js';
import {calculatePaginationMetadata} from '../utils/calculate-pagination.js';
import {CONSTANT} from '../utils/constant.js';
import {handleError} from '../utils/error-handler.js';

class BookService {
  static create = async (req: BookCreateRequest) => {
    try {
      await BookRepository.create(req);

      return 'Success';
    } catch (error) {
      throw handleError({
        operationName: 'BookService.create',
        error,
      });
    }
  };

  static updatedById = async (req: BookUpdateByIdRequest) => {
    try {
      await BookRepository.updateById({
        id: req.id,
        data: {
          name: req.name,
          category: req.category,
          publisher: req.publisher,
          author: req.author,
          year: req.year,
          price: req.price,
          description: req.description,
          isbn: req.isbn,
          issn: req.issn,
          updatedAt: new Date(),
        },
      });

      return 'Success';
    } catch (error) {
      throw handleError({
        operationName: 'BookService.updatedById',
        error,
      });
    }
  };

  static getListByFilter = async (
    req: BookGetListByFilterRequest,
  ): Promise<BookListWithMetadataResponse> => {
    try {
      const filter: Filter = {
        selectFields: [
          CONSTANT.DB_FIELD.NAME,
          CONSTANT.DB_FIELD.DESCRIPTION,
          CONSTANT.DB_FIELD.PRICE,
          CONSTANT.DB_FIELD.ISBN,
          CONSTANT.DB_FIELD.ISSN,
          CONSTANT.DB_FIELD.CATEGORY,
          CONSTANT.DB_FIELD.PUBLISHER,
          CONSTANT.DB_FIELD.AUTHOR,
          CONSTANT.DB_FIELD.YEAR,
        ],

        sorts: [
          {
            field: req.sort,
            order: req.order,
          },
        ],
        pagination: {
          page: req.page,
          pageSize: req.pageSize,
        },
      };

      if (req.query) {
        filter.filterFields = filter.filterFields ?? []; // Ensure `filter.filterFields` is initialized
        filter.filterFields.push({
          field: CONSTANT.DB_FIELD.NAME,
          operator: 'ilike',
          value: req.query,
        });
      }

      const {books, totalBooks} =
        await BookRepository.findManyAndCountByFilter(filter);

      const pagination = calculatePaginationMetadata(
        totalBooks,
        req.page,
        req.pageSize,
      );

      const response: BookListWithMetadataResponse = {
        data: books.map(book => {
          return {
            name: book.name,
            description: book.description,
            price: book.price,
            isbn: book.isbn,
            issn: book.issn,
            category: book.category,
            publisher: book.publisher,
            author: book.author,
            year: book.year,
          };
        }),

        metadata: {
          totalPages: pagination.totalPages,
          currentPage: pagination.currentPage,
          nextPage: pagination.nextPage,
          previousPage: pagination.previousPage,
        },
      };

      return response;
    } catch (error) {
      throw handleError({
        operationName: 'BookService.getListByFilter',
        error,
      });
    }
  };
}

export {BookService};
