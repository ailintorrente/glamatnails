import React, { useState, useEffect, useRef } from "react";
import "./Services.css";
import { FaWhatsapp } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const servicesData = [
  {
    id: "clasica",
    title: "Manicuría Clásica / Rusa",
    content: (
      <>
        <p className="service-intro">
          Un servicio pensado para quienes aman la simpleza y la prolijidad.
        </p>

        <ul className="check-list">
          <li><span className="check-icon">✔</span> Remoción de cutículas</li>
          <li><span className="check-icon">✔</span> Limado de uñas</li>
          <li>
            <span className="check-icon">✔</span> Aplicación de esmalte tradicional tono vía láctea rosa o
            transparente
          </li>
          <li><span className="check-icon">✔</span> Hidratación de cutículas con aceite nutritivo</li>
          <li><span className="check-icon">✔</span> Hidratación de manos con crema humectante</li>
        </ul>

        <p className="service-subtitle">Elegí tu técnica favorita:</p>

        <ul className="bullet-list">
          <li><strong>Clásica:</strong> con empujador y alicate.</li>
          <li><strong>Rusa:</strong> con torno y fresa para una limpieza más profunda.</li>
        </ul>

        <p className="service-note">
          También podés elegir la <strong>MANICURÍA RUSA</strong> como un extra a
          tu servicio regular.
        </p>

        <p className="service-duration">
          Duración estimada del turno: 30 a 40 min
        </p>

        <p className="service-price">$15.000</p>
      </>
    )
  },
  {
    id: "semi",
    title: "Esmaltado Semipermanente",
    content: (
      <>
        <p className="service-intro">
          Esmaltado de larga duración y brillo. Ideal para mantener las uñas
          prolijas, cortas y con un acabado profesional por un tiempo más
          prolongado que el esmaltado tradicional.
        </p>

        <p className="service-subtitle">No se recomienda en:</p>

        <ul className="cross-list">
          <li><span className="check-icon">✖</span> Uñas muy largas</li>
          <li><span className="check-icon">✖</span> Uñas frágiles, quebradizas o que se descamen fácilmente</li>
        </ul>

        <p className="service-duration">
          Duración estimada del turno: 1 h a 1:20 h
        </p>

        <p className="service-price">$19.000</p>
      </>
    )
  },
  {
    id: "capping",
    title: "Capping",
    content: (
      <>
        <p className="service-intro">
          Es un servicio que refuerza la uña natural sin alargarla.
        </p>

        <ul className="bullet-list">
          <li>
            <strong>Con BASE NIVELADORA ⭐ el más elegido ⭐</strong><br />
            Ideal para mantener el largo natural con un leve refuerzo.
          </li>
          <li>
            <strong>Con ACRIGEL o GEL</strong><br />
            Ideal si utilizás mucho las manos.
          </li>
        </ul>

        <p className="service-duration">
          Base niveladora: 1 h a 1:30 h<br />
          Acrigel o gel: 1:20 h a 1:45 h
        </p>

        <p className="service-price">
          Base niveladora $22.000<br />
          Acrigel o Gel $27.000
        </p>
      </>
    )
  },
  {
    id: "esculpidas",
    title: "Esculpidas",
    content: (
      <>
        <p className="service-intro">
          Técnica que permite alargar y dar estructura a las uñas naturales.
        </p>

        <ul className="bullet-list">
          <li><strong>ACRIGEL:</strong> liviano y flexible.</li>
          <li><strong>ACRÍLICO:</strong> más rígido y resistente.</li>
        </ul>

        <p className="service-duration">
          Duración estimada del turno: 1:45 h a 2 h
        </p>

        <p className="service-price">$29.000</p>
      </>
    )
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(servicesData[0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <SectionTitle
        badge="SERVICIOS"
        title="Uñas pensadas para vos"
        subtitle="Técnicas personalizadas según tu estilo y necesidad."
      />

      <div className="services-wrapper">
        <div className="services-menu">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`services-item ${activeService.id === service.id ? "active" : ""}`}
              onClick={() => setActiveService(service)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div key={activeService.id} className="services-card service-fade">
          <h3>{activeService.title}</h3>

          {activeService.content}

          <a
            href="https://wa.me/549115..."
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
