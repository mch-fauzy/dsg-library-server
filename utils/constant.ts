const CONSTANT = {
  QUERY: {
    DEFAULT_PAGE: 1,
    DEFAULT_PAGE_SIZE: 10,
    DEFAULT_ORDER: 'asc',
    DEFAULT_BOOK_SORT: 'name',
    DEFAULT_BOOK_QUERY: 'name',
  },
  REGEX: {
    NOT_ALPHANUMERIC: /[^a-zA-Z0-9]/g,
    NEW_LINE: /[\n]+/g,
  },
  ERROR_MESSAGE: {
    UNKNOWN: 'Unknown error occurs while processing the request',
    UNRECOGNIZED: 'Unrecognized error occurs while processing the request',
  },
  DB_FIELD: {
    ID: 'id',
    NAME: 'name',
    ISBN: 'isbn',
    ISSN: 'issn',
    DESCRIPTION: 'description',
    PRICE: 'price',
    CATEGORY: 'category',
    AUTHOR: 'author',
    YEAR: 'year',
    PUBLISHER: 'publisher',
  },
} as const;

export {CONSTANT};
