import { render, screen } from "@testing-library/react";
import App from "./App";

// Define a test case using the test function
test("renders App component without crashing", () => {
  render(<App />);

  // Use screen query to check if Header component is rendered
  const titleElements = screen.getAllByText("Little Lemon");
  expect(titleElements.length).toBeGreaterThan(0);
});
