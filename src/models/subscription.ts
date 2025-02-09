import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const SubscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  planType: { type: String, enum: ['basic', 'premium', 'enterprise'], required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
});

SubscriptionSchema.add(BaseModel);

const Subscription = mongoose.model('Subscription', SubscriptionSchema);
export default Subscription;
