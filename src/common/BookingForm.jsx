import React, { useEffect, useState } from "react";
import Button from "./Button";
import ConfirmedBooking from "./ConfirmedBooking";

const BookingForm = ({ times }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().substring(0, 10),
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  });

  const [confirmedBooking, setConfirmedBooking] = useState(false);

  const [existingBookings, setExistingBookings] = useState([]);

  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    const { date, time, guests, occasion } = formData;
    return date && time && guests > 0 && occasion !== "";
  };

  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings");
    if (storedBookings) {
      setExistingBookings(JSON.parse(storedBookings));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setFormData(formData);
      setConfirmedBooking(true);
    }
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormValid(validateForm());
  };

  return (
    <>
      {confirmedBooking ? (
        <ConfirmedBooking formData={formData} />
      ) : (
        <div className="resForm">
          <h1>Reservation Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="date">Choose Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              aria-label="Date of reservation"
            />
            <label htmlFor="time">Choose Time</label>
            <select
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
              aria-label="Time of reservation"
            >
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
              aria-label="Number of guests"
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
              aria-label="Occasion for reservation"
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Farewell</option>
            </select>
          </form>
          <Button
            buttonLabel="Reserve a Table"
            handleClick={handleSubmit}
            disabled={!formValid}
            ariaLabel="Submit reservation"
          />
        </div>
      )}
    </>
  );
};

export default BookingForm;
