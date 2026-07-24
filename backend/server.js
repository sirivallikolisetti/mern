const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointmentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/hospitalDB")
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("Database Error:", err);
});

app.use("/api/appointments", appointmentRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hospital Appointment API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});