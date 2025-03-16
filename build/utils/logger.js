import { winstonLogger } from '../configs/winston.js';
import { CONSTANT } from './constant.js';
/**
 * Logs generic errors using Winston logger
 */
const logError = ({ message, operationName, error, }) => {
    winstonLogger.error({
        message,
        operation: operationName,
        reason: error.message?.replace(CONSTANT.REGEX.NEW_LINE, ' ').trim(),
        detail: error,
    });
};
/**
 * Logs unknown errors using Winston logger
 */
const logUnknownError = ({ message, operationName, error, }) => {
    winstonLogger.error({
        message,
        operation: operationName,
        detail: error,
    });
};
/**
 * Logs informational messages using Winston logger
 */
const logInfo = (message) => {
    winstonLogger.info(message);
};
export { logError, logUnknownError, logInfo };
//# sourceMappingURL=logger.js.map