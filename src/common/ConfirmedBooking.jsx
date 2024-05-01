import React from "react";

const ConfirmedBooking = ({ formData }) => {
  return (
    <div className="confirm">
      <h1>Booking Confirmed  😊 </h1>
      <div className="confirmPage">
        <p>
          <strong>Booking Date:</strong> {formData.date}
        </p>
        <p>
          <strong> Booking Time:</strong> {formData.time}
        </p>
        <p>
          <strong>Number of Guests:</strong> {formData.guests}
        </p>
        <p>
          <strong> Ocaasion:</strong> {formData.occasion}
        </p>
      </div>
    </div>
  );
};
export default ConfirmedBooking;