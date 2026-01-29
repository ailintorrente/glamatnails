import { motion } from "framer-motion";
import "./Testimonials.css";
import SectionTitle from "./SectionTitle";

const testimonials = [
    {
        name: "Maca R.",
        text: "Ailu es una excelente profesional. Súper detallista, prolija y siempre cuida tus uñas. Cada trabajo dura un montón y es destacable la buena atención con cada cliente. La recomiendo totalmente ♥️",
    },
    {
        name: "Silvy S.",
        text: "Ailu no solo recrea de manera espectacular mis diseños preferidos, sino también paso un momento de paz y relajación con ella, que me brinda su calidez y profesionalismo.",
    },
    {
        name: "Fer R.",
        text: "Cada vez que voy a Glam disfruto volver a mi niñez con los diseños de caricaturas y ser una adulta con diseños más elegantes. También disfruto del amor de Morfona!",
    },
    {
        name: "Sofi R.",
        text: "Atenderse con Ailu es un camino de ida, te recibe con amabilidad, te escucha, te aconseja sobre diseños y lo que te conviene y encima apenas entras te recibe morfi que es la perra más linda y cariñosa. La crema que te pone al final huele demasiado rico 🥰",
    },
     {
        name: "Amalia L.",
        text: "En Glam siempre me sentí como en mi hogar. Desde llegar y contar lo que pasó en la semana, hasta compartir merienda o recetas junto con Ailín. El profesionalismo de ella es único, tanto a la hora de reservar turnos anticipados como al momento de decidir los diseños en cada época y evento del año. Siempre voy 100% segura del trabajo fantástico de Glam, jamás visto en ningún otro lugar.",
    },
    {
        name: "Bian R.",
        text: "Atenderse con Ailu no es solo disfrutar de sus hermosos diseños y el arte que es capaz de volcar en ellas, es todo una experiencia con una perrita preciosa y buena y una manicurista que se convierte en amiga.",
    },
        {
        name: "Mica P.",
        text: "Ailu es una genia, súper detallista y amorosa. Me encanta atenderme en Glam!! ❤️",
    },
        {
        name: "Aixa P.",
        text: "Hace más de 3 años que me hago las uñas en Glam y la verdad que siempre es un placer. Ailu no solo tiene muchos colores, diseños y cositas para agregarle a las uñas, sino que es súper delicada y amorosa! ❤️❤️",
    },
        {
        name: "Abril R.",
        text: "Me hago las uñas con Ailu desde el 2021 y acá sigo! Desde el día 1 siempre la mejor atención, siempre dispuesta a intentar los diseños que le proponía. Muchas veces recibí halagos de amigas por los trabajos que me hacía en mis uñitas y siempre les recomendé ir con ella (algunas me hicieron caso y también quedaron muy contentas jajaja).  Ventaja? No solo es manicura, también te escucha y hace de psicóloga! Así que, si tienen la oportunidad, pasen por su estudio ♥️",
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
