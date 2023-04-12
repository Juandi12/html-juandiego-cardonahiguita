document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "CABALLO",
      img: "imagenes/CABALLO.jpg"
    },
    {
      name: "agula4",
      img: "imagenes/agula4.jpg"
    },
    {
      name: "dinosaurio",
      img: "imagenes/dinosaurio.jpg"
    },
    {
      name: "jirafa8",
      img: "imagenes/jirafa8.jpg"
    },
    {
      name: "lobo7",
      img: "imagenes/lobo7.jpg"
    },
    {
      name: "panda",
      img: "imagenes/panda.jpg"
    },
    {
      name: "CABALLO",
      img: "imagenes/CABALLO.jpg"
    },
    {
      name: "agula4",
      img: "imagenes/agula4.jpg"
    },
    {
      name: "dinosaurio",
      img: "imagenes/dinosaurio.jpg"
    },
    {
      name: "jirafa8",
      img: "imagenes/jirafa8.jpg"
    },
    {
      name: "lobo7",
      img: "imagenes/lobo7.jpg"
    },
    {
      name: "panda",
      img: "imagenes/panda.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/blanck.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "¡felicidades, encontraste todos los pares!";
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
