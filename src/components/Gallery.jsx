import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import SectionTitle from "./SectionTitle";

// Importá tus imágenes
import img1 from "../assets/galeria1.jpeg";
import img2 from "../assets/galeria2.jpeg";
import img3 from "../assets/galeria3.jpeg";
import img4 from "../assets/galeria4.jpeg";
import img5 from "../assets/galeria5.jpeg";
import img6 from "../assets/galeria6.jpeg";
import img7 from "../assets/galeria7.jpeg";
import img8 from "../assets/galeria8.jpeg";

const galleryData = [
  {
    img: img1,
    title: "Esculpidas",
    description:
      "Decoración simple en rosa (auras y french) + decoración simple con efecto metalizado + strass perla + relieves"
  },
  {
    img: img2,
    title: "Capping con Base",
    description: "Decoración intermedia con efecto metalizado y relieves"
  },
  {
    img: img3,
    title: "Esmaltado Semipermanente con Manicuría Rusa",
    description: "Nail art personalizado (Full Caricaturas)"
  },
  {
    img: img4,
    title: "Esculpidas en Acrílico",
    description: "Técnicas mixtas (babyboomer y mármol)"
  },
  {
    img: img5,
    title: "Esmaltado Semipermanente",
    description: "Nail art personalizado con Caricaturas"
  },
  {
    img: img6,
    title: "Capping con Base",
    description: "Diseño simple minimal"
  },
  {
    img: img7,
    title: "Capping con Acrigel",
    description: "Diseños simples e intermedios"
  },
  {
    img: img8,
    title: "Esmaltado Semipermanente",
    description: "Nail Art personalizado con Caricaturas"
  }
];

const Gallery = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery" id="gallery">
      <SectionTitle
        badge="GALERÍA"
        title="Cada diseño cuenta una historia"
        subtitle="Inspirate con algunos de mis trabajos realizados en el homestudio."
      />

      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div
            className="gallery-item"
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <img src={item.img} alt={item.title} />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="gallery-actions">
        <a
  href="https://www.instagram.com/glam.at.nailss"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  Ver más fotos en Instagram
</a>

          <a
    href="https://ar.pinterest.com/glamatnails/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary btn-secondary btn-gallery-link"
  >
    ¿Necesitás más ideas? Inspirate con mis tableros de Pinterest
  </a>
      </div>
    </section>
  );
};

export default Gallery;
