// src/models/auditModel.js
const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Employee' },
  changes: { type: mongoose.Schema.Types.Mixed, required: true },
  action: { type: String, enum: ['CREATE', 'UPDATE', 'DELETE'], required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Audit', auditSchema);
