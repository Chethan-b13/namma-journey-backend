import { Request, Response } from 'express';
import User from '../../models/User';
import { AuthRequest } from '../../types/api/authTypes';
import { UserRole, VALID_USER_ROLES } from '../../models/constants';

/**
 * Register a new user (called after Firebase Signup)
 */
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, phone, firebaseUID, profilePic, role } = req.body;

    // Check if user already exists
    let existingUser = await User.findOne({ firebaseUID });
    if (existingUser) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }

    // Create a new user in MongoDB
    const newUser = new User({
      firstName,
      lastName,
      email,
      firebaseUID,
      phone,
      profilePic,
      role: role || ['traveler'],
      lastLogin: new Date(),
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error });
  }
};

export const updateUserRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, role } = req.body;

    if (!role.every((r: UserRole) => VALID_USER_ROLES.includes(r))) {
      res.status(400).json({ error: 'Invalid role provided' });
      return; // Ensure the function exits here
    }

    const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'User role updated', user });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error });
  }
};

/**
 * Get Current User Profile (Protected)
 */
export const getUserProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = req.user;
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error });
  }
};
