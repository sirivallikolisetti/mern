const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

const timeSlots = ["10:00","10:30","11:00","11:30","14:00","14:30","15:00"];

// BOOK APPOINTMENT
router.post("/book", async (req, res) => {
  try {
    const { patientName, doctorId, doctorName, date, timeSlot, phone, email, notes } = req.body;

    if (!patientName || !doctorId || !doctorName || !date || !timeSlot) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if slot is already booked
    const existing = await Appointment.findOne({ doctorId, date, timeSlot });
    if (existing) {
      return res.status(400).json({ message: "Slot already booked" });
    }

    // Count appointments for queue number
    const appointmentCount = await Appointment.countDocuments({ doctorId, date });

    const newAppointment = new Appointment({
      patientName,
      doctorId,
      doctorName,
      date,
      timeSlot,
      phone,
      email,
      notes,
      queueNumber: appointmentCount + 1,
      status: "Pending"
    });

    await newAppointment.save();
    res.json({ message: "Appointment booked successfully", appointment: newAppointment });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Booking failed" });
  }
});

// GET ALL APPOINTMENTS
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;