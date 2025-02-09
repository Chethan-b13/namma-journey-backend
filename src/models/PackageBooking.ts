import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const PackageBookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
  bookingDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  paymentStatus: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending' },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
  numberOfPeople: { type: Number, default: 1 },
  specialRequests: { type: String },
});

PackageBookingSchema.add(BaseModel);

const PackageBooking = mongoose.model('PackageBooking', PackageBookingSchema);
export default PackageBooking;
