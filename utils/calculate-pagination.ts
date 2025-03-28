import type {Metadata} from '../models/dto/metadata.js';

const calculatePaginationMetadata = (
  totalRows: number,
  currentPage: number,
  pageSize: number,
): Metadata => {
  const totalPages = Math.ceil(totalRows / pageSize);
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  const previousPage = currentPage > 1 ? currentPage - 1 : null;

  return {
    totalPages,
    currentPage,
    nextPage,
    previousPage,
  };
};

export {calculatePaginationMetadata};
