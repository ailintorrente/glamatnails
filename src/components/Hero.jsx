import React from "react";
import "./Hero.css";
import { FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import heroImg from "../assets/home.jpg";

const Hero = () => {
  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="subtitle hero-anim delay-1">
            Tus uñas son tu carta de presentación
          </p>

          <h1 className="title hero-anim delay-2">
            ¡En <span>Glam at Nails</span> te las dejamos perfectas!
          </h1>

          <div className="hero-divider hero-anim delay-3"></div>

          <div className="hero-actions hero-anim delay-4">


            <a href="#gallery" className="btn-primary btn-secondary">
              Ver trabajos <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hero-card hero-anim delay-3">
          <div className="hero-card-inner">
            <h3>Reservá tu turno</h3>

            <ul>
              <li>📍 Atención en Boedo</li>
              <li>⏰ Turnos personalizados</li>
              <li>💅 Técnicas modernas y prolijas</li>
            </ul>

            <a
              href="https://wa.me/549115..."
              className="btn-primary"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
