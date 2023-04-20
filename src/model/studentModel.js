const mongoose = require('mongoose')
const studentModel = new mongoose.Schema(
    {
    name: { 
        type: String,
        required: true 
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
   
  }, { timestamps: true });

  module.exports = mongoose.model('Student', studentModel)