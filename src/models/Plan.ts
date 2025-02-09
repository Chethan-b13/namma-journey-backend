import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const PlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  travelPartner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  price: { type: Number, default: 0 }, // Free or paid event
  maxParticipants: { type: Number },
  isPublic: { type: Boolean, default: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

PlanSchema.add(BaseModel);

const Plan = mongoose.model('Plan', PlanSchema);
export default Plan;
