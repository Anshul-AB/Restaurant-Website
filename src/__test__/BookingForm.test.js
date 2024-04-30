import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom"; // Import BrowserRouter for Router context
import BookingForm from "../common/BookingForm";

test("render the booking form heading", async () => {
  render(
    <Router>
      <BookingForm />
    </Router>
  );

  // Use screen query to check if the form heading is rendered
  const headingElement = screen.getByText("Reservation Form");
  expect(headingElement).toBeInTheDocument();
});

describe("BookingForm", () => {
  it("selects an option in the dropdown", () => {
    render(
      <Router>
        <BookingForm
          times={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
        />
      </Router>
    );

    const selectElement = screen.getByLabelText("Choose Time");
    fireEvent.change(selectElement, { target: { value: "17:00" } });

    expect(selectElement.value).toBe("17:00");
  });
});
