const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  evaluation_id: {
    type: mongoose.Types.ObjectId,
    ref: 'evaluation'
  },
  student_id: {
    type: mongoose.Types.ObjectId,
    ref: 'student',
  },
  marks: {
    type: Number,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('submission', submissionSchema);