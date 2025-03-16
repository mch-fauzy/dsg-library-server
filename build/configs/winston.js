import { format, transports, createLogger } from 'winston';
import { CONFIG } from './config.js';
const consoleLogTransport = new transports.Console({
    format: format.combine(format.colorize(), format.timestamp(), format.printf(info => {
        const { timestamp, level, message, operation, reason, detail } = info;
        if (operation && reason) {
            return `${timestamp} ${level} [${operation}] ${message}. Reason: ${reason}`;
        }
        // Log unknown type error
        if (operation && detail) {
            return `${timestamp} ${level} [${operation}] ${message}. Detail: ${JSON.stringify(detail)}`;
        }
        return `${timestamp} ${level} ${message}`;
    })),
});
const winstonLogger = createLogger({
    defaultMeta: { appName: CONFIG.APP.NAME }, // Saved in error log via errorLogRotateTransport
    transports: [consoleLogTransport],
});
export { winstonLogger };
//# sourceMappingURL=winston.js.map