import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json, colorize } = format;
import path from 'path';

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level}: ${message}`;
  }),
);

// Create a Winston logger
const logger = createLogger({
  level: 'info',
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({
      filename: path.join('logs', 'error.log'),
      level: 'error',
    }),
    new transports.File({ filename: path.join('logs', 'combined.log') }),
  ],
});

export default logger;
