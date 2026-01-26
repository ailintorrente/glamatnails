import { useEffect, useRef } from "react";
import "./About.css";
import SectionTitle from "./SectionTitle";
import aboutImg from "../assets/img-about.jpg";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <SectionTitle
        badge="SOBRE MÍ"
        title="Detrás de Glam at Nails"
        subtitle="Pasión, formación y atención personalizada en cada detalle."
      />

      <div className="about-content" ref={aboutRef}>
        <div className="about-image">
          <img src={aboutImg} alt="Manicuría profesional Glam at Nails" />
        </div>

        <div className="about-text">
          <p>
            Soy manicura profesional y creadora de Glam at Nails. Trabajo de
            forma personalizada, dedicando cada turno a una sola clienta para
            garantizar prolijidad, cuidado y un resultado que realmente te
            represente.
          </p>
          <p>
            Glam nació en plena pandemia a partir de la necesidad de hacer algo que me brinde mis propios ingresos. Con tan solo 19 años elegí comenzar a emprender en este rubro tan hermoso y gigante, y hoy me encuentro con más de 300 clientas que han pasado por el Homestudio y muchísima experiencia y conocimientos adquiridos.
          </p>

          <ul className="about-list">
            <li>Máster Educador Internacional</li>
            <li>Máster en Nail Art</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
