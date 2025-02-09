import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const PackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  agency: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  guide: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  price: { type: Number, required: true },
  duration: { type: Number }, // in days
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  recurring: { type: Boolean, default: false },
  recurrenceType: { type: String, enum: ['weekly', 'monthly', 'yearly'], default: 'weekly' },
  destination: { type: String },
  locations: [{ type: String }], // Multiple locations covered in package
  availability: { type: String, enum: ['available', 'limited', 'sold out'], default: 'available' },
  accommodation: {
    type: String,
    enum: ['hotel', 'resort', 'camp', 'hostel', 'villa', 'dormitory'],
    default: 'hotel',
  },
  accommodationDetails: { type: String },
  minGroupSize: { type: Number, default: 1 },
  maxGroupSize: { type: Number, default: 30 },
  inclusions: [{ type: String }],
  exclusions: [{ type: String }],
  transportation: {
    type: String,
    enum: ['flight', 'train', 'bus', 'private car', 'van'],
    default: 'bus',
  },
  images: [{ type: String }],
  video: { type: String },
  discount: { type: Number, min: 0, max: 100 },
  category: {
    type: String,
    enum: ['adventure', 'cultural', 'eco-tourism', 'beach', 'mountain'],
    default: 'adventure',
  },
  tags: [{ type: String }],
  bookingDeadline: { type: Date },
  seatsAvailable: { type: Number, default: 0 },
  itinerary: [{ type: String }],
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: { type: Number, min: 1, max: 5 },
      comment: { type: String },
    },
  ],
});

PackageSchema.add(BaseModel);

const Package = mongoose.model('Package', PackageSchema);
export default Package;
