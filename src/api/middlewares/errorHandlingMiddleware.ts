import logger from '../../config/logger';

export const errorHandlingMiddleware = (err: any, req: any, res: any, next: any) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
};
