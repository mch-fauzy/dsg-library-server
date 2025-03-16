declare const CONSTANT: {
    readonly QUERY: {
        readonly DEFAULT_PAGE: 1;
        readonly DEFAULT_PAGE_SIZE: 10;
        readonly DEFAULT_ORDER: "asc";
        readonly DEFAULT_BOOK_SORT: "name";
        readonly DEFAULT_BOOK_QUERY: "name";
    };
    readonly REGEX: {
        readonly NOT_ALPHANUMERIC: RegExp;
        readonly NEW_LINE: RegExp;
    };
    readonly ERROR_MESSAGE: {
        readonly UNKNOWN: "Unknown error occurs while processing the request";
        readonly UNRECOGNIZED: "Unrecognized error occurs while processing the request";
    };
    readonly DB_FIELD: {
        readonly ID: "id";
        readonly NAME: "name";
        readonly ISBN: "isbn";
        readonly ISSN: "issn";
        readonly DESCRIPTION: "description";
        readonly PRICE: "price";
        readonly CATEGORY: "category";
        readonly AUTHOR: "author";
        readonly YEAR: "year";
        readonly PUBLISHER: "publisher";
    };
};
export { CONSTANT };
