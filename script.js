function cotizar(producto) {
  const inputDetalles = document.querySelector('#reservas textarea');
  if (inputDetalles) {
    inputDetalles.value = "Hola, me interesa cotizar: " + producto + ". ";
    window.location.href = "#reservas";
    inputDetalles.focus();
  }
}