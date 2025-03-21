import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  membershipType: {
    type: String,
    enum: ['Basic', 'Premium'],
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Member = mongoose.model('Member', memberSchema);
