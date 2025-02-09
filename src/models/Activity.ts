import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const ActivitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number }, // in hours
  agency: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  availability: { type: String, enum: ['available', 'limited', 'sold out'], default: 'available' },
  category: {
    type: String,
    enum: ['adventure', 'cultural', 'eco-tourism', 'beach', 'mountain'],
    default: 'adventure',
  },
  tags: [{ type: String }],
  images: [{ type: String }],
  video: { type: String },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: { type: Number, min: 1, max: 5 },
      comment: { type: String },
    },
  ],
});

ActivitySchema.add(BaseModel);

const Activity = mongoose.model('Activity', ActivitySchema);
export default Activity;
