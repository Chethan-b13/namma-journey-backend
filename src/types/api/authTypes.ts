import { Request } from 'express';

export interface AuthRequest extends Request {
  user?: any; // Attach user object to request
}
