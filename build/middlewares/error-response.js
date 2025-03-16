import { StatusCodes } from 'http-status-codes';
import { Failure } from '../utils/failure.js';
import { responseWithMessage } from '../utils/response.js';
import { CONSTANT } from '../utils/constant.js';
import { logUnknownError } from '../utils/logger.js';
class ErrorResponseMiddleware {
    static handler = (error, c) => {
        // Response with known errors
        if (error instanceof Failure && error.name === 'Failure') {
            return responseWithMessage(c, error.code, error.message);
        }
        // Response with validation errors for Zod validator
        if (error instanceof Error && error.name === 'ValidationError') {
            return responseWithMessage(c, StatusCodes.BAD_REQUEST, error.message);
        }
        // Log and Response with unknown errors
        logUnknownError({
            message: CONSTANT.ERROR_MESSAGE.UNKNOWN,
            operationName: 'ErrorResponseMiddleware',
            error: error,
        });
        return responseWithMessage(c, StatusCodes.INTERNAL_SERVER_ERROR, CONSTANT.ERROR_MESSAGE.UNKNOWN);
    };
}
export { ErrorResponseMiddleware };
//# sourceMappingURL=error-response.js.map