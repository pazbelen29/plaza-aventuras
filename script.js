function cotizar(conjunto){

const mensaje =
`Hola Plaza Aventuras 😊

Me interesa cotizar el ${conjunto}.

¿Podrían indicarme disponibilidad?`;

window.open(
`https://wa.me/56933523723?text=${encodeURIComponent(mensaje)}`
);

}

document
.getElementById("formulario")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"¡Solicitud enviada! También puedes escribirnos por WhatsApp para una respuesta más rápida."
);

});