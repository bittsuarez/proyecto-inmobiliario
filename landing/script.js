const WHATSAPP_NUMBER = "56922283338"; // +56 9 2228 3338, formato wa.me (sin '+' ni espacios)

function buildWhatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const defaultMessage =
  "Hola Cristian, vi tu página y me gustaría recibir más información.";

document.getElementById("wsp-header").href = buildWhatsappLink(defaultMessage);
document.getElementById("wsp-hero").href = buildWhatsappLink(defaultMessage);

document.getElementById("lead-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const nombre = form.nombre.value.trim();
  const telefono = form.telefono.value.trim();
  const interes = form.interes.value;
  const mensaje = form.mensaje.value.trim();

  const lines = [
    `Hola Cristian, soy ${nombre}.`,
    `Estoy buscando: ${interes}.`,
    `Mi teléfono de contacto: ${telefono}.`,
  ];
  if (mensaje) lines.push(`Detalle: ${mensaje}`);

  window.open(buildWhatsappLink(lines.join("\n")), "_blank", "noopener");
});
