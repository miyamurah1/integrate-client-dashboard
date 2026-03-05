import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Guests from "./pages/Guests";
import Reservations from "./pages/Reservations";
import Rooms from "./pages/Rooms";
import Restaurant from "./pages/Restaurant";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const pages = {
    Dashboard: <Dashboard />,
    Guests: <Guests />,
    Reservations: <Reservations />,
    Rooms: <Rooms />,
    Restaurant: <Restaurant />,
  };

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">{pages[activePage]}</main>
    </div>
  );
}