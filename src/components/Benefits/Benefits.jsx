import { useEffect, useRef } from "react";
import BenefitCard from "./BenefitCard";
import { benefitsData } from "./benefitsData";
import "./Benefits.css";
import SectionTitle from "../SectionTitle";

const Benefits = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="benefits-section" id="benefits">
      <SectionTitle
        badge="BENEFICIOS"
        title="Más que uñas lindas"
        subtitle="Una experiencia pensada para que disfrutes tu turno de principio a fin."
      />

      <div className="benefits-grid">
        {benefitsData.map((benefit, index) => (
          <BenefitCard
            key={benefit.id}
            icon={benefit.icon}
            title={benefit.title}
            text={benefit.text}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ transitionDelay: `${index * 0.08}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
