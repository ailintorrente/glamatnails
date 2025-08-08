const servicios = {
    1: {
      servicio: "Manicuría Clásica / Rusa",
      descripcion: `
      Un servicio pensado para quienes aman la simpleza y la prolijidad. <br> Este servicio incluye: <br><i class="bi bi-check"></i>Remoción de cutículas <br><i class="bi bi-check"></i>Limado de uñas.<br><i class="bi bi-check"></i>Aplicación de esmalte tradicional tono vía láctea rosa o transparente <br><i class="bi bi-check"></i>Hidratación de cutículas con aceite nutritivo. <br><i class="bi bi-check"></i>Hidratación de manos con crema humectante. <br><br>Elegí tu técnica favorita: <br><i class="bi bi-dot"></i><strong>Clásica:</strong> con empujador y alicate. <br><i class="bi bi-dot"></i><strong>Rusa:</strong> con torno y fresa para una limpieza más profunda. <br><br>También podés elegir la MANICURÍA RUSA como un extra a tu servicio regular.`,
      duracion: `Duración estimada del turno: 30 a 40 min`,
      precio: "$10.000"
    },
    2: {
      servicio: "Esmaltado Semipermanente",
      descripcion: `
      Esmaltado de larga duración y brillo. Ideal para mantener las uñas prolijas,  cortas y con un acabado profesional por un tiempo más prolongado que el esmaltado tradicional.<br><br>No se recomienda en:<br><i class="bi bi-x"></i> uñas muy largas, ya que el esmaltado no proporciona una gran resistencia estructural.<br><i class="bi bi-x"></i> uñas frágiles, quebradizas o que se descamen fácilmente.`,
      duracion: "Duración estimada del turno: 1 h a 1:20 h",
      precio: "$15.000"
    },
    3: {
      servicio: "Capping",
      descripcion: `Es un servicio que refuerza la uña natural sin alargarla. Ideal para uñas frágiles, que se doblan, se descaman o se rompen fácilmente. Se realiza aplicando un producto más resistente sobre la uña natural.<br><br><i class="bi bi-dot"></i> Con <strong>BASE NIVELADORA</strong> <i class="bi bi-star-fill"></i> el más elegido <i class="bi bi-star-fill"></i><br>Ideal para mantener el largo natural con un leve refuerzo, corrige ondulaciones, es ligero y flexible.<br><br><i class="bi bi-dot"></i> Con <strong>ACRIGEL O GEL</strong><br>Reforzá tus uñas con un material más firme y fuerte, ideal si utilizás mucho las manos y tus uñas se quiebran muy fácilmente.`,
      duracion: "Duración estimada del turno: base niveladora 1 h a 1:30h // acrigel o gel 1:20 h a 1:45 h",
      precio: "Con Base niveladora $18.000 // Con Acrigel o Gel $22.000"
    },
    4: {
      servicio: "Esculpidas",
      descripcion: `Es una técnica que permite alargar y dar estructura a las uñas naturales con molde y 100% personalizado desde cero.<br><br><i class="bi bi-dot"></i> Con <strong>ACRIGEL</strong><br>Es más liviano y flexible, ideal para uñas hasta largo 2 o 3 de molde, resistente, cómodo y natural. Es un producto de manejo rápido e inodoro.<br><br><i class="bi bi-dot"></i> Con <strong>ACRÍLICO</strong><br>Es más rígido y fuerte, ideal para uñas más largas o que necesiten una mayor resistencia. Se utiliza monómero (líquido con fuerte olor) y polímero (polvo acrílico),.<br>Su secado es al aire, por lo que en invierno puede tardar un poco más debido a las bajas temperaturas.`,
      duracion: "Duración estimada del turno: 1:45 h a 2 h",
      precio: "$23.000"
    },
  };

  document.querySelectorAll(".list-group-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".list-group-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      const id = item.getAttribute("data-id");
      const { servicio, descripcion, duracion, precio } = servicios[id];
      document.getElementById("descripcion-servicio").innerHTML = `
        <h5>${servicio}</h5>
        <p>${descripcion}</p>
        <p class="fst-italic">${duracion}</p>
        <p class="fw-bold">${precio}</p>
      `;
    });
  });


  // FORMULARIO ENVIO A WHATSAPP
  const servicioSelect = document.getElementById("servicio");
  const tipoDisenio = document.getElementById("opciones-diseno");

  servicioSelect.addEventListener("change", function () {
    const valor = this.value;
    
    if (valor !== "Manicuría" && valor !== "") {
      tipoDisenio.classList.remove("d-none");
    } else {
      tipoDisenio.classList.add("d-none");
    }
  });

  document.getElementById("formularioContacto").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const servicio = servicioSelect.value;
    const remocion = document.querySelector('input[name="remocion"]:checked').value;
    const diseno = document.getElementById("tipo-diseno").value;

    if (edad < 18) {
      Swal.fire({
      icon: 'warning',
      title: 'Atención',
      text: 'Lo sentimos, no se realizan servicios a menores de edad',
      confirmButtonColor: '#F56476'
    });
    return;
}

    let mensaje = `Hola! Soy ${nombre}, tengo ${edad} años y quiero reservar un turno para: ${servicio}.`;

    if (remocion === "Sí") {
      mensaje += ` Tengo un trabajo hecho en mis uñas para remover.`;
    }

    if (servicio !== "Manicuría" && diseno) {
      mensaje += ` En cuanto al diseño, me gustaría: ${diseno}.`;
    }

    mensaje += " Por favor cuando puedan, me enviarían los turnos?";

    const url = `https://wa.me/5491123856238?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });






  document.addEventListener('DOMContentLoaded', () => {
    const links = Array.from(document.querySelectorAll('.navbar-nav .nav-link'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const homeLink = links.find(a => a.getAttribute('href') === '#' || a.getAttribute('href') === '');

    // helper: set active by href
    const setActive = (hash) => {
      links.forEach(a => a.classList.remove('active'));
      const target = links.find(a => a.getAttribute('href') === hash);
      (target || homeLink)?.classList.add('active');
    };

    // al cargar, marcar HOME
    setActive('#');

    // observar secciones; cuando una esté centrada en viewport, activarla
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActive('#' + id);
        }
      });
    }, {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // “zona activa” alrededor del centro
      threshold: 0
    });

    sections.forEach(sec => io.observe(sec));

    // si volvés muy arriba, activar HOME
    window.addEventListener('scroll', () => {
      if (window.scrollY < 120) setActive('#');
    });

    // cerrar el menú en mobile cuando clickeás un link (UX)
    const bsCollapse = document.getElementById('navbarNav');
    links.forEach(link => link.addEventListener('click', () => {
      const collapse = bootstrap.Collapse.getInstance(bsCollapse);
      if (collapse) collapse.hide();
    }));
  });