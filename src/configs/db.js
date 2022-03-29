const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/eval');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;