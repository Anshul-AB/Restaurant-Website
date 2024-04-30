import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Booking from "./components/Booking";
import { useReducer } from "react";

// / Reducer function to manage availableTimes state
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same available times regardless of the date
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function App() {
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initialState
  );

  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Header data-testid="header"  />
          <Routes>
            <Route path="*" element={<Main />} />
            <Route
              path="/booking"
              element={
                <Booking availableTimes={availableTimes} dispatch={dispatch} times={initialState}/>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
