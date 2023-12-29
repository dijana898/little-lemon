import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Home";
import About from "../components/About";
import Reservation from "../components/Booking";
import Order from "../components/Order";
import Login from "../components/Login";
import Confirmation from "../components/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
