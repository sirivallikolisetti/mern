import React, { useState } from "react";
import axios from "axios";
import "./BookAppointment.css";

function BookAppointment() {
  const [step, setStep] = useState(1);
  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const doctors = [
    { id: 1, name: "Dr. Sharma", specialization: "Cardiology", experience: "10 yrs", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Dr. Rao", specialization: "Neurology", experience: "8 yrs", image: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 3, name: "Dr. Mehta", specialization: "Orthopedics", experience: "12 yrs", image: "https://randomuser.me/api/portraits/women/65.jpg" }
  ];

  const slots = ["10:00 AM","10:30 AM","11:00 AM","11:30 AM","2:00 PM","2:30 PM","3:00 PM"];

  // Convert time to 24-hour format
  const convertTo24Hour = (time) => {
    const [hourMinute, modifier] = time.split(" ");
    let [hours, minutes] = hourMinute.split(":");
    hours = parseInt(hours);
    if(modifier === "PM" && hours !== 12) hours += 12;
    if(modifier === "AM" && hours === 12) hours = 0;
    return `${hours.toString().padStart(2,'0')}:${minutes}`;
  };

  const bookAppointment = async () => {
    // Validate date
    const today = new Date();
    today.setHours(0,0,0,0);
    if (!date || new Date(date).getTime() < today.getTime()) {
      alert("Please select a valid date (today or future).");
      return;
    }

    if (!doctor) {
      alert("Please select a doctor.");
      return;
    }

    if (!time) {
      alert("Please select a time slot.");
      return;
    }

    try {
      const formattedTime = convertTo24Hour(time);

      const res = await axios.post("http://localhost:5000/api/appointments/book", {
        patientName,
        doctorId: doctor.id,
        doctorName: doctor.name,
        date,
        timeSlot: formattedTime,
        phone,
        email,
        notes
      });

      alert("Appointment Booked Successfully");
      console.log(res.data);

      // Reset form
      setStep(1);
      setDoctor(null);
      setDate("");
      setTime("");
      setPatientName("");
      setPhone("");
      setEmail("");
      setNotes("");

    } catch(error) {
      console.error(error);
      alert("Booking Failed");
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h2>Book Appointment</h2>

        {/* Progress Indicator */}
        <div className="steps">
          <span className={step >= 1 ? "active" : ""}>1 Doctor</span>
          <span className={step >= 2 ? "active" : ""}>2 Date & Time</span>
          <span className={step >= 3 ? "active" : ""}>3 Confirm</span>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h3>Select Doctor</h3>
            <div className="doctor-list">
              {doctors.map((doc) => (
                <div
                  key={doc.id}
                  className={`doctor-card ${doctor?.id === doc.id ? "selected" : ""}`}
                  onClick={() => setDoctor(doc)}
                >
                  <img src={doc.image} alt={doc.name} />
                  <h4>{doc.name}</h4>
                  <p>{doc.specialization}</p>
                  <p>{doc.experience}</p>
                </div>
              ))}
            </div>
            <button
              disabled={!doctor}
              onClick={() => setStep(2)}
              className="next-btn"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h3>Select Date</h3>
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />
            <h3>Select Time Slot</h3>
            <div className="slots">
              {slots.map((s, index) => (
                <button
                  key={index}
                  className={time === s ? "selected-slot" : ""}
                  onClick={() => setTime(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="back-btn">Back</button>
            <button
              disabled={!date || !time}
              onClick={() => setStep(3)}
              className="next-btn"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h3>Patient Information</h3>
            <input
              type="text"
              placeholder="Patient Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Symptoms / Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <h3>Appointment Summary</h3>
            <p><b>Doctor:</b> {doctor?.name}</p>
            <p><b>Date:</b> {date}</p>
            <p><b>Time:</b> {time}</p>

            <button onClick={() => setStep(2)} className="back-btn">Back</button>
            <button onClick={bookAppointment} className="book-btn">Confirm Appointment</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookAppointment;