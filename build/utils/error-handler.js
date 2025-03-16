import { Failure } from './failure.js';
import { logError, logUnknownError } from './logger.js';
import { CONSTANT } from './constant.js';
/**
 * Handles an error and returns a corresponding failure response
 */
const handleError = ({ operationName, error }) => {
    if (error instanceof Failure) {
        return error;
    }
    if (error instanceof Error) {
        return handleGenericError({ operationName, error });
    }
    return handleUnknownError({ operationName, error });
};
/**
 * Handles a generic error
 */
const handleGenericError = ({ operationName, error }) => {
    const message = CONSTANT.ERROR_MESSAGE.UNRECOGNIZED;
    logError({
        message,
        operationName,
        error,
    });
    return Failure.internalServer(`${message}`);
};
/**
 * Handles an unknown error
 */
const handleUnknownError = ({ operationName, error }) => {
    const message = CONSTANT.ERROR_MESSAGE.UNKNOWN;
    logUnknownError({
        message,
        operationName,
        error,
    });
    return Failure.internalServer(`${message}`);
};
export { handleError };
//# sourceMappingURL=error-handler.js.map