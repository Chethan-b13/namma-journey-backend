import { Response, NextFunction, RequestHandler } from 'express';
import { AuthRequest } from '../../../types/api/authTypes';

/**
 * Middleware to check if the user has the required role(s)
 */
const authorizeRoles =
  (...allowedRoles: string[]): RequestHandler =>
  (req: AuthRequest, res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        res.status(403).json({ error: 'Unauthorized - No user data' });
        return;
      }

      const userRoles = req.user.role || []; // Get user roles from MongoDB

      // Check if user has at least one allowed role
      const hasAccess = userRoles.some((role: string) => allowedRoles.includes(role));

      if (!hasAccess) {
        res.status(403).json({ error: "Forbidden - You don't have permission" });
        return;
      }

      next(); // ✅ Continue to the next middleware
    } catch (error) {
      next(error); // ✅ Ensure errors are properly handled
    }
  };

export default authorizeRoles;
