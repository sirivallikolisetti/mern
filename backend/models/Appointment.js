const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  doctorId: { type: String, required: true },
  doctorName: { type: String, required: true },
  date: { type: String, required: true },       // YYYY-MM-DD format
  timeSlot: { type: String, required: true },   // 24-hour format
  phone: String,
  email: String,
  notes: String,
  queueNumber: Number,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Appointment", appointmentSchema);