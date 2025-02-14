import { Response, NextFunction } from 'express';
import admin from '../../../config/firebaseAuth';
import User from '../../../models/User';
import { AuthRequest } from '../../../types/api/authTypes';

/**
 * Middleware to verify Firebase ID Token
 */
const verifyFirebaseToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const token = req.headers.authorization?.split('Bearer ')[1]; // Extract token

  if (!token) {
    res.status(401).json({ error: 'Unauthorized - No token provided' });
    return;
  }

  try {
    // Verify Firebase token
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Find user in MongoDB
    let user = await User.findOne({ firebaseUID: decodedToken.uid });

    if (!user) {
      res.status(403).json({ error: 'User not found' });
      return;
    }

    req.user = user; // Attach user to request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
};

export default verifyFirebaseToken;
