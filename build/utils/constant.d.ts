declare const CONSTANT: {
    readonly QUERY: {
        readonly DEFAULT_PAGE: 1;
        readonly DEFAULT_PAGE_SIZE: 10;
        readonly DEFAULT_ORDER: "desc";
    };
    readonly REGEX: {
        readonly NOT_ALPHANUMERIC: RegExp;
        readonly NEW_LINE: RegExp;
    };
    readonly ERROR_MESSAGE: {
        readonly UNKNOWN: "Unknown error occurs while processing the request";
        readonly UNRECOGNIZED: "Unrecognized error occurs while processing the request";
    };
};
export { CONSTANT };
