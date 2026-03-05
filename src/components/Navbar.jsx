import { useState } from "react";
import "./Navbar.css";

const pages = ["Dashboard", "Guests", "Reservations", "Rooms", "Restaurant"];

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="logo-dot" />
          <span className="logo-text">Inntegrate</span>
        </div>
        <ul className="navbar-links">
          {pages.map((p) => (
            <li key={p}>
              <button
                className={`nav-link ${activePage === p ? "active" : ""}`}
                onClick={() => setActivePage(p)}
              >{p}</button>
            </li>
          ))}
        </ul>
        <div className="navbar-right">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">✉️</button>
          <div className="avatar" style={{ background: "#7c5cfc" }}>R</div>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
      {menuOpen && (
        <ul className="mobile-menu">
          {pages.map((p) => (
            <li key={p}>
              <button
                className={`mobile-link ${activePage === p ? "active" : ""}`}
                onClick={() => { setActivePage(p); setMenuOpen(false); }}
              >{p}</button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}