import {winstonLogger} from '../configs/winston.js';
import {CONSTANT} from './constant.js';

/**
 * Base interface for all log details
 */
interface LogBase {
  message: string;
  operationName: string;
}

/**
 * Interface for logging generic errors
 */
interface LogGenericError extends LogBase {
  error: Error;
}

/**
 * Interface for logging unknown errors
 */
interface LogUnknownError extends LogBase {
  error: unknown;
}

/**
 * Logs generic errors using Winston logger
 */
const logError = ({message, operationName, error}: LogGenericError): void => {
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
const logUnknownError = ({
  message,
  operationName,
  error,
}: LogUnknownError): void => {
  winstonLogger.error({
    message,
    operation: operationName,
    detail: error,
  });
};

/**
 * Logs informational messages using Winston logger
 */
const logInfo = (message: string): void => {
  winstonLogger.info(message);
};

export {logError, logUnknownError, logInfo};
