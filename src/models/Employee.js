const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  department: { type: String },
  position: { type: String },
  dateOfJoining: { type: Date },
  salary: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);