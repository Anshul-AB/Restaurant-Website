import React, { useState } from "react";
import Button from "./Button";

const BookingForm = ({ times }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Handled");
    document.body.innerText = JSON.stringify(formData, null, 2);
    // Handle form submission logic here (e.g., API request, etc.)
  };

  return (
    <div className="resForm">
      <h1>Reservation Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Choose Date</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="time">Choose Time</label>
        <select id="time" value={formData.time} onChange={handleChange}>
          {times &&
            times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </select>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          value={formData.guests}
          min="1"
          max="10"
          onChange={handleChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={formData.occasion} onChange={handleChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Farewell</option>
        </select>
      </form>
      <Button buttonLabel="Reserve a Table" handleClick={handleSubmit} />
    </div>
  );
};

export default BookingForm;
