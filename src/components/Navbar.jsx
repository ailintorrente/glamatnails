import React from "react";
import "./Navbar.css";
import LogoImg from "../assets/logo-glam-inverted.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark fixed-top glass-nav">
      <div className="container-fluid px-4 px-xl-5">
        <a className="navbar-brand logo" href="#">
          <img
            src={LogoImg}
            alt="Logo Glam at Nails"
            className="logo-img"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBar"
          aria-controls="navBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navBar">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item"><a href="#" className="nav-link">HOME</a></li>
            <li className="nav-item"><a href="#benefits" className="nav-link">BENEFICIOS</a></li>
            <li className="nav-item"><a href="#services" className="nav-link">SERVICIOS</a></li>
            <li className="nav-item"><a href="#gallery" className="nav-link">GALERÍA</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">SOBRE MI</a></li>
            <li className="nav-item"><a href="#faq" className="nav-link">FAQ</a></li>
            <li className="nav-item"><a href="#testimonials" className="nav-link">TESTIMONIOS</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">RESERVÁ</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
