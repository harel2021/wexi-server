import { basename } from 'path';

export const PORT = process.env.PORT || 4000;
export const LOGS_DIR = process.env.LOGS_DIR || basename(__dirname) + 'logs';
export const LOG_FILE_NAME = process.env.LOG_FILE_NAME || 'log.txt';