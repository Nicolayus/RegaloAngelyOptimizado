/* CARTA */
// const sobre = document.getElementById("sobre");
// const hint = document.getElementById("hint");

function inicializarCarta() {
  const sobre = document.getElementById("sobre");
  const hint = document.getElementById("hint");
  const fraseEl = document.getElementById("frase");

  if (!sobre || !fraseEl) return;

  let abierta = false;
  let indice = 0;

  const frases = [
    "Te amo ❤️",
    "Te quiero 💕",
    "Eres mi persona favorita",
    "Siempre contigo"
  ];

  sobre.addEventListener("click", () => {
    if (abierta) return;

    abierta = true;
    sobre.classList.add("abierta");
    hint.style.display = "none";

    setInterval(() => {
      fraseEl.classList.remove("mostrar");

      setTimeout(() => {
        const padding = 60;
        const top =
          Math.random() * (window.innerHeight - padding * 2) + padding;
        const left =
          Math.random() * (window.innerWidth - padding * 2) + padding;

        fraseEl.style.top = `${top}px`;
        fraseEl.style.left = `${left}px`;

        fraseEl.textContent = frases[indice];
        indice = (indice + 1) % frases.length;

        fraseEl.classList.add("mostrar");
      }, 500);
    }, 2500);
  });

  const decoracion = document.getElementById("decoracion");

const elementos = ["✨", "🌸", "💖", "🌷", "💫"];

function crearParticula() {
  const span = document.createElement("span");
  span.classList.add("particula");
  span.textContent = elementos[Math.floor(Math.random() * elementos.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 4 + Math.random() * 4 + "s";
  span.style.fontSize = 16 + Math.random() * 20 + "px";

  decoracion.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 8000);
}

setInterval(crearParticula, 600);

}
