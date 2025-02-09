import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const ActivityBookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity', required: true },
  bookingDate: { type: Date, default: Date.now },
  activityDate: { type: Date, required: true }, // Date when the activity is to happen
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  paymentStatus: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending' },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
  numberOfPeople: { type: Number, default: 1 },
  specialRequests: { type: String },
});

ActivityBookingSchema.add(BaseModel);

const ActivityBooking = mongoose.model('ActivityBooking', ActivityBookingSchema);
export default ActivityBooking;
