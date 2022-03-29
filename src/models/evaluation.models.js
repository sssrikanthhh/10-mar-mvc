const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
  date_of_evaluation: { type: String, required: true },
  instructor_id: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  batch_id: {
    type: mongoose.Types.ObjectId,
    ref: 'batch'
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('evaluation', evaluationSchema);