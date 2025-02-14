import mongoose from 'mongoose';
import BaseModel from './BaseModel';
import { USER_ROLES, VALID_USER_ROLES } from './constants';

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  firebaseUID: { type: String, required: true, unique: true }, // Firebase UID (user ID provided by Firebase Auth)
  phone: { type: String, required: true },
  profilePic: { type: String },
  role: {
    type: [String],
    enum: VALID_USER_ROLES,
    default: [USER_ROLES.TRAVELER],
  },
  refreshToken: { type: String }, // Optional: Store refresh token if using Firebase Auth with custom JWT handling
  lastLogin: { type: Date },
});

UserSchema.add(BaseModel);

const User = mongoose.model('User', UserSchema);
export default User;
