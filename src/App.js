import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
