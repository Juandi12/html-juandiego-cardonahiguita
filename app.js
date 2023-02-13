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
      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
});
