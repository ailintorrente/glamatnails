import { useState } from "react";
import "./ContactForm.css";
import SectionTitle from "./SectionTitle";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [service, setService] = useState("");
  const [design, setDesign] = useState("");
  const [remove, setRemove] = useState("no");
  const [underAge, setUnderAge] = useState(false);

  const servicesWithDesign = [
    "Semipermanente",
    "Capping con Base",
    "Capping con Acrigel",
    "Esculpidas con Acrigel",
    "Esculpidas con Acrílico",
  ];

const handleSubmit = (e) => {
  e.preventDefault();

  if (age < 18) {
    setUnderAge(true);
    return;
  }

  const hasDesign =
    service !== "Manicuría" && design && design.trim() !== "";

  const designText = hasDesign
    ? `En cuanto al diseño, me gustaría: ${design}.`
    : "";

  const removeText =
    remove === "si"
      ? "Tengo un trabajo hecho en mis uñas para remover."
      : "";

  const message = `Hola! Soy ${name}, quiero reservar un turno para: ${service}.
${designText}
${removeText}
Por favor cuando puedan, ¿me enviarían los turnos?`;

  const whatsappUrl = `https://wa.me/5491123856238?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};



  return (
    <section className="contact-section" id="contact">
            <SectionTitle
        badge="CONTACTO"
        title="Reservá tu turno"
        subtitle="Completá el formulario para que podamos brindarte una respuesta personalizada a la brevedad."
      />

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Edad
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="1"
            required
          />
        </label>

        <label>
          Servicio
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Seleccioná un servicio</option>
            <option>Manicuría</option>
            <option>Semipermanente</option>
            <option>Capping con Base</option>
            <option>Capping con Acrigel</option>
            <option>Esculpidas con Acrigel</option>
            <option>Esculpidas con Acrílico</option>
          </select>
        </label>

        {servicesWithDesign.includes(service) && (
          <label>
            ¿Qué tipo de diseño querés?
            <select
              value={design}
              onChange={(e) => setDesign(e.target.value)}
              required
            >
              <option value="">Elegí una opción</option>
              <option>Liso o diseño simple</option>
              <option>Diseño complejo</option>
              <option>Aún no sé</option>
            </select>
          </label>
        )}

        <div className="radio-group">
          <p>¿Tenés algo en tus uñas para remover?</p>

          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="remove"
                value="si"
                checked={remove === "si"}
                onChange={(e) => setRemove(e.target.value)}
              />
              Sí
            </label>

            <label>
              <input
                type="radio"
                name="remove"
                value="no"
                checked={remove === "no"}
                onChange={(e) => setRemove(e.target.value)}
              />
              No
            </label>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Enviar por WhatsApp
        </button>
      </form>

      {underAge && (
        <div className="age-warning">
          <p>
            ⚠️ Actualmente no realizo servicios a menores de edad.
          </p>
          <button onClick={() => setUnderAge(false)}>Entendido</button>
        </div>
      )}
    </section>
  );
}
