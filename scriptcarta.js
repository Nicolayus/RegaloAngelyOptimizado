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
    "Gracias por existir",
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
}
