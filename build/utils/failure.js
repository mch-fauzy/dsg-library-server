import { StatusCodes } from 'http-status-codes';
class Failure extends Error {
    /* Custom properties */
    code;
    constructor(message, code) {
        super(message); /* Call the constructor of its parent class to access the parent's properties and methods */
        this.code = code;
        this.name = 'Failure';
        /* Showing only the relevant function calls leading to the error */
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, Failure);
        }
    }
    static notFound = (message) => {
        return new Failure(message, StatusCodes.NOT_FOUND);
    };
    static unauthorized = (message) => {
        return new Failure(message, StatusCodes.UNAUTHORIZED);
    };
    static invalidCredentials = (message) => {
        return new Failure(message, StatusCodes.UNAUTHORIZED);
    };
    static internalServer = (message) => {
        return new Failure(message, StatusCodes.INTERNAL_SERVER_ERROR);
    };
    static badRequest = (message) => {
        return new Failure(message, StatusCodes.BAD_REQUEST);
    };
    static conflict = (message) => {
        return new Failure(message, StatusCodes.CONFLICT);
    };
}
export { Failure };
//# sourceMappingURL=failure.js.map