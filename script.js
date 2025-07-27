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