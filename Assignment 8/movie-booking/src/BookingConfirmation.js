import React from "react";
import { useLocation } from "react-router-dom";

function BookingConfirmation() {
  const location = useLocation();
  const { name, email, mobile } = location.state;
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p style={{textAlign:"center"}}>Thank you. Your Booking Details are:</p>
      <div className="booking-summary">
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      </div>
    </div>
  );
}

export default BookingConfirmation;