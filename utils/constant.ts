const CONSTANT = {
  QUERY: {
    DEFAULT_PAGE: 1,
    DEFAULT_PAGE_SIZE: 10,
    DEFAULT_ORDER: 'desc',
  },
  REGEX: {
    NOT_ALPHANUMERIC: /[^a-zA-Z0-9]/g,
    NEW_LINE: /[\n]+/g,
  },
  ERROR_MESSAGE: {
    UNKNOWN: 'Unknown error occurs while processing the request',
    UNRECOGNIZED: 'Unrecognized error occurs while processing the request',
  },
} as const;

export {CONSTANT};
