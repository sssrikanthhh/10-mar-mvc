const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollId: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: 'user' },
  batchId: { type: mongoose.Types.ObjectId, ref: 'batch' },
  evaluationId: { type: mongoose.Types.ObjectId, ref: 'evalaution' }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('student', studentSchema);