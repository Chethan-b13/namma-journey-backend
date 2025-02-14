import express from 'express';
import verifyFirebaseToken from '../middlewares/auth/authMiddleware';
import { getUserProfile, registerUser, updateUserRole } from '../controllers/authController';
import authorizeRoles from '../middlewares/auth/roleMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.get('/profile', verifyFirebaseToken, getUserProfile);
router.put('/update-role', verifyFirebaseToken, authorizeRoles('admin'), updateUserRole);

// TODO: Add access specifiers routes
router.get('/admin-dashboard', verifyFirebaseToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

export default router;
