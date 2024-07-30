// src/models/employeeModel.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true },
  department: { type: String, required: true },
  employeeStatus: { type: String, required: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  history: [
    {
      timestamp: { type: Date, default: Date.now },
      action: { type: String },  // Added field for action
      changes: mongoose.Schema.Types.Mixed  // Changed to allow any type, including objects
    }
  ]
});

// Create a compound index for location
employeeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Employee', employeeSchema);
