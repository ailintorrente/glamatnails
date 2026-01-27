import { motion } from "framer-motion";
import "./Testimonials.css";
import SectionTitle from "./SectionTitle";

const testimonials = [
    {
        name: "Maca R.",
        text: "Ailu es una excelente profesional. Súper detallista, prolija y siempre cuida tus uñas. Cada trabajo dura un montón y es destacable la buena atención con cada cliente. La recomiendo totalmente ♥️",
    },
    {
        name: "Martina S.",
        text: "Hace años me mordía las uñas y gracias a Glam at Nails pude dejarlas. Siempre me asesora con lo mejor para mis uñas y el resultado es hermoso.",
    },
    {
        name: "Carla M.",
        text: "El homestudio es divino y súper prolijo. Me encanta la dedicación y la paciencia que tiene Ailin. No la cambio por nada.",
    },
    {
        name: "Florencia T.",
        text: "Desde que voy a Glam, mis uñas están sanas y fuertes. Los diseños son delicados y duran un montón. Se nota el amor por lo que hace.",
    },
     {
        name: "Martina S.",
        text: "Hace años me mordía las uñas y gracias a Glam at Nails pude dejarlas. Siempre me asesora con lo mejor para mis uñas y el resultado es hermoso.",
    },
    {
        name: "Carla M.",
        text: "El homestudio es divino y súper prolijo. Me encanta la dedicación y la paciencia que tiene Ailin. No la cambio por nada.",
    }
];

export default function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            <SectionTitle
                badge="TESTIMONIOS"
                title="Lo que dicen mis clientas"
                subtitle="Experiencias reales de quienes confían en Glam at Nails."
            />
            <div className="testimonials-container">
                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="testimonial-card"
                        >
                            <p className="testimonial-text">“{item.text}”</p>
                            <span className="testimonial-name">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="testimonials-cta">
  <button
    className="btn-primary"
    onClick={() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Yo también quiero vivir la experiencia Glam ✨
  </button>
</div>

        </section>
    );
}
