import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { name, email, mobile } });
  };

  return (
    <div>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <p>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </p>
        <p>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </p>
        <p>
        <label>Mobile:</label>
        <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;