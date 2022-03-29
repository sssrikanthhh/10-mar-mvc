const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  gender: { type: String, required: false },
  dateOfBirth: { type: String, required: true },
  type: { type: String, enum: ['student', 'admin', 'instructor'] }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('user', userSchema);