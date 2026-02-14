
// ===== CARRIL =====
const contenido = document.getElementById("contenido");
const btnIzq = document.getElementById("izquierda");
const btnDer = document.getElementById("derecha");

let indice = 0;

const slides = [

  `
  <div>
    <img src="https://media.tenor.com/Q953SflEIxUAAAAi/snoopy.gif" />
    <h1>Tengo algo que decirte 💖</h1>
    <p>Te amo mucho, mi amor. Eres lo más preciado que tengo en mi vida ✨</p>
  </div>
  `,

  `
  <div class="contenido2">
    <h1>Pero antes... 📸</h1>
    <p>Unos pequeños recuerdos</p>
    <div class="imagenes">
      <video src="video1.mp4" autoplay loop muted></video>
      <video src="video2.mp4" autoplay loop muted></video>
      <video src="video3.mp4" autoplay loop muted></video>
      <video src="video4.mp4" autoplay loop muted></video>
      <video src="video5.mp4" autoplay loop muted></video>
      <video src="video6.mp4" autoplay loop muted></video>
    </div>
  </div>
  `,

  `
  <div class="carta">
    <div class="sobre" id="sobre">
      <div class="tapa"></div>
      <div class="hoja">
        <p>Mi hermosa ANGELY 💕👑✨</p>
        <p> Mi amor ❤️ cuando empezamos me sentía súper raro 🥺 no sabía nada, simplemente te daba todo mi amor como iba y venía 💞 y no me importaba nada, solo tú y yo 🌍✨ y ya nada más en el mundo.

              Sabes, cuando la cagaba era un estúpido enamorado 😔 que no quería reconocer que te podía perder por su estupidez… así que no sabía cómo reaccionar. Perdón por todo, amor 🙏💔 pero quiero que sepas que gracias a esta nueva oportunidad que me diste 💖 en serio, en serio, en serio… seré un loco enamorado 😍🔥 pero ahora sin estupideces.

              Mi amor, yo siempre te amé y te amaré 💘 porque eres mi primer y único amor verdadero 💍✨ hasta mi propia familia me lo decía. Tengo unas maneras muy estúpidas y empalagosas de demostrar mi amor 😅💕 así que perdón por ser intenso… se podría decir 🥹

              Sabes que te amo mucho 💓 a veces me duele que no lo quieras aceptar 💔 pero yo lo acepto porque sé lo que conlleva volver con la mejor persona que conocí en mi vida 🌹✨ y yo te amo mucho. No me importa si no confías en mí, yo confío en ti 🤝💖 y con eso me basta.

              Te amo mucho como para dejarlo aquí 💞 y ahora que volvimos, mi amor, todo irá a mejor ✨🌈 yo te amo mucho y quiero que sepas que siempre estaré para ti 🫶. Yo hablo de mí porque es lo que te puedo dar y hacer sentir: amor 💘, locura 🤪, enojo 😡, amargura 😅, muchas emociones, tristeza 😢, cariño 🥰, consuelo 🤗, duda 🤔, irritación 🙃 y muchas más… porque son todas las emociones que quiero vivir contigo 💑💫.

              De verdad te amo mucho mi amor 💕 o sea, de tanto decirlo suena cotidiano supongo para ti, pero para mí es muy bonito decirlo 🥹💖 siento que es un amor sincero e inocente ✨💗 es hermoso saber que existes 🌷 le doy gracias a tu mamá por parirte y a tu papá por crearte 😅🙏 porque de verdad te amo mucho.

              Mi vida, eres una niña hermosa 🌹 la más hermosa del mundo 🌎👑 te amo mucho, muy sinceramente 💞 eres perfecta para mí 💘 quiero una vida contigo por el resto de mi vida 🏡💍 te amo mucho mi amor, en serio no quiero que lo dudes 🤍

              TE AMO ❤️ TE AMO 💖 TE AMOOOOOOOO 😍🔥 DIOS COMO TE AMO 💓 TE ADORO 🌹 ERES MI DIOSA 👑✨ MI AMOR 💘 y no es por capricho, sinceramente te amo. Me volví loco 🤯 cuando no estaba contigo y no quiero volver a pasar por eso 💔 no por el sentimiento, sino porque no puedo vivir sin ti 🫀❤️

              Todo lo que pasamos fue hermoso ✨ cocinamos juntos 👩‍🍳👨‍🍳, fuimos a varios lugares 🌆🌊 y te adaptaste a mis dos economías 😂💸 aunque me gustaba más cocinarte porque así demuestro mi amor 🍳💖 me encantaba engreírte 🥰 y espero pronto hacerlo otra vez.

              Siempre voy a querer prepararte tu jugo de fresas 🍓❤️ y tus pankekes 🥞💕 o ahora que estás a dieta tu ensalada con pollo o bacon 🥗🍗 yo te prepararé lo que tú quieras mi amor 💞 porque yo te amo y siempre voy a querer cocinarte 🍽️💘

              Te amo mucho mi amor hermoso ❤️‍🔥 TE AMOOOOOO 💗 Y SIEMPRE TE AMARÉ 🤍 TE AMO MI AMOR 💖 TE AMOOOOOOOOOOO 😍🌹

              Mi hermosa ANGELY 💕👑✨</p>
      </div>
    </div>
  </div>
  `
];

function render() {
  contenido.innerHTML = slides[indice];
  if (indice === 2) iniciarCarta();
}

btnIzq.onclick = () => {
  indice = indice === 0 ? slides.length - 1 : indice - 1;
  render();
};

btnDer.onclick = () => {
  indice = (indice + 1) % slides.length;
  render();
};

render();


// ===== CARTA =====
function iniciarCarta() {
  const sobre = document.getElementById("sobre");
  if (!sobre) return;

  sobre.onclick = () => {
    sobre.classList.add("abierta");
  };
}


// ===== FRASES SIEMPRE ACTIVAS =====
const fraseEl = document.getElementById("frase");

const frases = [
  "Te amo ❤️",
  "Siempre contigo 💕",
  "Eres preciosa 🩷",
  "Eres mi persona favorita 🌸",
  "Te quiero mucho💖",
  "Quiero un futuro contigo 💝",
  "💙Eres mi presente y sé que serás mi futuro🩵",
  "Eres mi luz diaria💘",
  "Quisiera tenerte cerca❤️‍🩹"
];

let indiceFrase = 0;

function mostrarFrase() {
  fraseEl.classList.remove("mostrar");

  setTimeout(() => {
    fraseEl.style.top = Math.random() * window.innerHeight + "px";
    fraseEl.style.left = Math.random() * window.innerWidth + "px";
    fraseEl.textContent = frases[indiceFrase];
    indiceFrase = (indiceFrase + 1) % frases.length;
    fraseEl.classList.add("mostrar");
  }, 300);
}

setInterval(mostrarFrase, 2500);


// ===== BRILLOS SIEMPRE ACTIVOS =====
const decoracion = document.getElementById("decoracion");
const elementos = ["✨", "🌸", "💫", "🌺"];

function crearParticula() {
  const span = document.createElement("span");
  span.classList.add("particula");
  span.textContent = elementos[Math.floor(Math.random() * elementos.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 5 + Math.random() * 4 + "s";
  span.style.fontSize = 14 + Math.random() * 18 + "px";

  decoracion.appendChild(span);

  setTimeout(() => span.remove(), 9000);
}

setInterval(crearParticula, 800);
