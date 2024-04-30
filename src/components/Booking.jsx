import React from "react";
import BookingForm from "../common/BookingForm";

const Booking = ({availableTimes, times}) => {
  return (
    <div>
      <BookingForm availableTimes={availableTimes} times={times}/>
    </div>
  );
};

export default Booking;
