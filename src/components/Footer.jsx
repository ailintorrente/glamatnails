import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-col">
          <h3 className="footer-title">Glam at Nails</h3>
          <p>Boedo, CABA</p>
          <p>Atención exclusivamente por turnos</p>
          <p className="footer-hours">
            Horarios: Mar a Sáb <br /> de 8:30 a 18:30 hs
          </p>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-list">
            <li>
              <i className="bi bi-whatsapp"></i>
              <a
                href="https://wa.me/5491123856238"
                target="_blank"
                rel="noreferrer"
              >
                +54 9 11 2385 6238
              </a>
            </li>
            <li>
              <i className="bi bi-instagram"></i>
              <a
                href="https://www.instagram.com/glam.at.nailss"
                target="_blank"
                rel="noreferrer"
              >
                @glam.at.nailss
              </a>
            </li>
            <li>
              <i className="bi bi-pinterest"></i>
              <a href="https://ar.pinterest.com/glamatnails/" target="_blank" rel="noreferrer">
                Glam at Nails
              </a>
            </li>
            <li>
              <i className="bi bi-envelope"></i>
              glam.at.nails@gmail.com
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="footer-col">
          <h4>Dónde estamos</h4>
          <p className="footer-address">
            <i className="bi bi-geo-alt"></i> Av. San Juan y Castro <br /> Boedo,
            CABA
          </p>

          <div className="footer-transport">
            <p><strong>Transportes cercanos</strong></p>
            <p>Colectivos: 7 · 15 · 53 · 65 · 75 · 88 · 97 · 126 · 127 · 160 · 180 · 181</p>
            <p>Subte: Línea E – Estación Boedo</p>
          </div>


        </div>
                  <div className="footer-col footer-map">
            <iframe
              title="Mapa Glam at Nails"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.135155855782!2d-58.42282712336029!3d-34.62602465867817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca54ffee0e4f%3A0x74542597c3ef32dc!2sAvenida%20San%20Juan%20%26%20Castro%2C%20C1252%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1769390510865!5m2!1sen!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>

      <div className="footer-bottom">
        © 2026 Glam at Nails. Todos los derechos reservados. Desarrollado por UXnicorp.
      </div>
    </footer>
  );
}
