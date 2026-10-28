"use client";

import { useState } from "react";

export default function Header({ onRegister, onLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header>
        <div className="wrap">
          <nav aria-label="Main">
            <a className="logo" href="#home" aria-label="4A Pantnagar home">
              4A Pantnagar<small>Alumni Alma Mater Advancement Association</small>
            </a>
            <button
              className="tog"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              Menu
            </button>
            <ul className={`menu${menuOpen ? " open" : ""}`} id="menu" onClick={() => setMenuOpen(false)}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About 4A</a></li>
              <li><a href="#alumni">Alumni</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><button type="button" className="reg" onClick={onRegister}>Register</button></li>
              <li><button type="button" onClick={onLogin}>Login</button></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
