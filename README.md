# Little Lemon Restaurant Frontend

Welcome to the frontend repository for the Little Lemon Restaurant project. This project provides a user interface for making table reservations at the restaurant.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Reservation Form**: Users can reserve a table by selecting a date, time, number of guests, and occasion.
- **Form Validation**: Implements HTML5 form validation to ensure required fields are filled out correctly.
- **Confirmation Page**: Displays a confirmation message with the details of the reservation after submission.
- **Unit Tests**: Includes unit tests to ensure the functionality of reservation features.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Anshul-AB/Restaurant-Website.git
   ```

2. **Clone the Repository**:

   ```bash
   cd little-lemon-restaurant-frontend
   npm install
   ```

3. **Run the Development Server:
   **:

   ```bash
   npm start
   ```

## Technologies Used

- [React.js](https://reactjs.org/): Frontend JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/): For managing navigation and routing within the application.
- HTML5 and CSS3: Used for structuring and styling the user interface.
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/react/): Used for writing unit tests for components and functionality.

## Folder Structure

src/
|-- components/
| |-- BookingForm.js
| |-- ConfirmedBooking.js
| |-- Button.js
|-- tests/
| |-- BookingForm.test.js
|-- App.js
|-- index.js
|-- styles.css
|-- README.md

## Running Tests

To run unit tests for this project, use the following command:

```bash
npm test
```

This will execute all unit tests defined in the tests directory and provide a test report.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
