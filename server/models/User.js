import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
  },
  age: {
    type: Number,
  },
  bmi: {
    type: Number,
  },
  diet_preferences: {
    type: [String],
  },
  diet_type: {
    type: String,
    enum: ['balanced', 'high-protein', 'high-fiber', 'low-fat', 'low-carb', 'low-sodium'],
  },
  favorites: {
    type: [String],
  },
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
UserSchema.pre('save', function (next) {
  const currentTime = new Date;
  this.updated_at = currentTime;
  if (!this.created_at) {
    this.created_at = currentTime;
  }
  next();
});

export default mongoose.model('users', UserSchema);
