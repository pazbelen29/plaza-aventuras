function cotizar(producto) {
  const mensaje = 
`Hola Plaza Aventuras 😊

Me interesa cotizar el ${producto}.

¿Podrían indicarme disponibilidad y condiciones?`;

  window.open(
    `https://wa.me/56933523723?text=${encodeURIComponent(mensaje)}`
  );
}

document
  .getElementById("formulario")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = this.querySelectorAll("input, textarea");
    const nombre = inputs[0].value;
    const telefono = inputs[1].value;
    const fecha = inputs[2].value;
    const detalles = inputs[3].value;

    const mensajeFormulario = 
`Hola Plaza Aventuras 😊, quiero solicitar una reserva:

👤 Nombre: ${nombre}
📱 Teléfono: ${telefono}
📅 Fecha del evento: ${fecha}
📝 Detalles / Servicios solicitados: ${detalles}`;

    window.open(
      `https://wa.me/56933523723?text=${encodeURIComponent(mensajeFormulario)}`
    );
  });