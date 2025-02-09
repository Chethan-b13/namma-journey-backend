import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const TransactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['subscription', 'event', 'activity', 'package'], required: true },
  typeId: { type: mongoose.Schema.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['card', 'upi'], required: true },
  status: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending' },
});

TransactionSchema.add(BaseModel);

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;
