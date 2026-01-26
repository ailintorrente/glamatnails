import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./Faqs.css";
import SectionTitle from "./SectionTitle";

const faqs = [
  {
    question: "¿Cuánto duran los servicios?",
    answer: (
      <>
        Cualquiera de los servicios que se realizan en Glam at Nails duran alrededor <strong>de 15 a 21 días</strong>, dependiendo del cuidado que se le dé, el largo y el estado de las uñas naturales.
        <br />
        <br />
        <strong>Importante:</strong> no dejar pasar más del tiempo recomendado para volver a realizar un servicio o retirarlo, ya que puede generarse humedad, hongos o lesiones.
      </>
    ),
  },
  {
    question: "¿Tengo que dejar descansar las uñas?",
    answer: (
      <>
        La respuesta corta es: <strong>depende</strong>. Si la manicura está bien realizada, se cumplen los tiempos de service y se cuidan correctamente, las uñas <strong>no deberían dañarse</strong>.
        <br />
        <br />
        En cambio, si el producto fue arrancado o se dejó pasar mucho tiempo varias veces, la uña se afina y el producto <strong>ya no se adhiere igual</strong>. En esos casos, lo ideal es retirar todo y dejarlas descansar hasta que la uña crezca por completo (aprox. 5 meses).
      </>
    ),
  },
  {
    question: "¿Cómo reservo un turno?",
    answer: (
      <>
        Podés reservar directamente por WhatsApp desde el <strong>botón de contacto</strong> o desde la sección <strong>“Reservá tu turno”</strong>.
        <br />
        <br />
        Recordá aclarar: tu nombre, el servicio que querés, si necesitás remover un servicio previo y si tenés algún diseño en mente.
      </>
    ),
  },
  {
    question: "Me quiero dejar de morder las uñas, ¿qué me recomendás?",
    answer: (
      <>
        En casos de onicofagia, lo más recomendable es comenzar con esculpidas pequeñas o capping (con base o acrigel según el caso).
        <br />
        <br />
        Tener un servicio realizado suele ayudar mucho a dejar el hábito de morderlas progresivamente.
      </>
    ),
  },
  {
    question: "¿Qué cuidados tengo que tener al realizarme un servicio?",
    answer: (
      <>
        Algunos cuidados clave para que el servicio dure correctamente:
        <ul className="faq-list">
          <li><strong>No usar las uñas como herramienta</strong>.</li>
          <li><strong>Usar guantes</strong> para tareas del hogar.</li>
          <li><strong>No morder</strong> las uñas ni la piel.</li>
          <li><strong>Cumplir con el service</strong> en el tiempo recomendado.</li>
          <li><strong>No arrancar el producto</strong>.</li>
        </ul>
      </>
    ),
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faqs-section">
      <div className="faqs-container">
        <SectionTitle
          badge="FAQs"
          title="Preguntas Frecuentes"
          subtitle="Todo lo que necesitás saber antes de tu turno en Glam at Nails."
        />

        <div className="faqs-wrapper">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="faq-item"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question"
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <ChevronDown
                  className={`faq-icon ${openIndex === index ? "open" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="faq-answer"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
