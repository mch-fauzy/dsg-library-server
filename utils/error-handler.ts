import {Failure} from './failure.js';
import {logError, logUnknownError} from './logger.js';
import {CONSTANT} from './constant.js';

/**
 * Interface representing generic error handler parameters
 */
interface ErrorHandlerGeneric {
  operationName: string;
  error: Error;
}

/**
 * Interface representing unknown error handler parameters
 */
interface ErrorHandlerUnknown {
  operationName: string;
  error: unknown;
}

/**
 * Handles an error and returns a corresponding failure response
 */
const handleError = ({operationName, error}: ErrorHandlerUnknown): Failure => {
  if (error instanceof Failure) {
    return error;
  }

  if (error instanceof Error) {
    return handleGenericError({operationName, error});
  }

  return handleUnknownError({operationName, error});
};

/**
 * Handles a generic error
 */
const handleGenericError = ({operationName, error}: ErrorHandlerGeneric) => {
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
const handleUnknownError = ({operationName, error}: ErrorHandlerUnknown) => {
  const message = CONSTANT.ERROR_MESSAGE.UNKNOWN;
  logUnknownError({
    message,
    operationName,
    error,
  });

  return Failure.internalServer(`${message}`);
};

export {handleError};
