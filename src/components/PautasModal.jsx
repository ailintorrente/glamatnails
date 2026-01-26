import { useState } from "react";
import "./PautasModal.css";

export default function PautasModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <div className="pautas-trigger">
        <p>
          Para una mejor organización y cuidado del servicio, te pedimos que
          leas nuestras pautas y condiciones antes de reservar.
        </p>
        <button className="btn-primary btn-secondary btn-trigger" onClick={() => setOpen(true)}>
          Leer pautas y condiciones
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setOpen(false)}>
              ×
            </button>

            <h3>Pautas y condiciones</h3>
            <p className="modal-warning">
              ⚠️ Importante leer hasta el final ⚠️
            </p>

            <ul>
              <li>Consultar disponibilidad del turno antes de señar.</li>
              <li>
                La seña de <strong>$8.000</strong> es obligatoria para reservar
                y <strong>no es reembolsable</strong>.
              </li>
              <li>
                No se devuelve la seña si:
                <ul>
                  <li>Avisás con menos de 48 hs de anticipación.</li>
                  <li>Llegás 20 minutos o más tarde.</li>
                </ul>
              </li>
            </ul>

            <h4>⏰ Llegadas tarde</h4>
            <ul>
              <li>+10 min → recargo 10%</li>
              <li>+15 min → recargo 25%</li>
              <li>
                +20 min → se pierde la seña y el servicio queda sujeto a
                disponibilidad
              </li>
            </ul>

            <h4>📌 Condiciones del servicio</h4>
            <ul>
              <li>Asistir sin acompañantes.</li>
              <li>Avisar retirados, reconstrucciones o nail art (tienen costo extra).</li>
              <li>No realizo esmaltado tradicional.</li>
              <li>No realizo pedicura ni servicios en pies.</li>
              <li>No realizo Soft Gel.</li>
              <li>No realizo servicios a menores de edad.</li>
              <li>Atiendo en mi casa, no es un local.</li>
            </ul>

            <h4>💅 Cuidados posteriores</h4>
            <ul>
              <li>No morder uñas ni piel proximal.</li>
              <li>No usar las uñas como herramienta.</li>
              <li>Usar guantes para tareas del hogar.</li>
              <li>Cumplir con el service cada 2 a 3 semanas.</li>
              <li>No arrancar el producto.</li>
            </ul>

            <h4>🛡️ Garantía</h4>
            <p>
              Se ofrece una garantía de <strong>48 hs</strong> únicamente si:
            </p>
            <ul>
              <li>El diseño y color son los mismos del servicio.</li>
              <li>
                Se envía una foto al momento del inconveniente para comprobar
                que fue un error del servicio.
              </li>
            </ul>
            <p>
              Pasadas las 48 hs no se otorga garantía y el arreglo será abonado.
            </p>

            <div className="modal-footer">
              <p>
                Homestudio en Boedo, CABA <br />
                +54 9 11 2385 6238 · @glam.at.nailss
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
