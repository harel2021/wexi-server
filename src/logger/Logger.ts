import * as winston from 'winston';
import { LOGS_DIR, LOG_FILE_NAME } from '../config/constants';
const winstonRotateFile = require('winston-daily-rotate-file');

// log levels
export enum LOG_LEVEL {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  VERBOSE = 'verbose',
  DEBUG = 'debug',
  SILLY = 'silly',
}

const logger = winston.createLogger({});

const format = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  winston.format.json()
);

logger.add(new winstonRotateFile({
  format,
  level: LOG_LEVEL.INFO,
  datePattern: 'YYYY-MM-DD',
  filename: LOG_FILE_NAME,
  dirname: LOGS_DIR,
}));

export const log = (severity: string, meta: any) => {
  const { message, ...other } = meta;
  logger.log(severity, message, other);
};