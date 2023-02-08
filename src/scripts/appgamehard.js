
function verificarRespuestaH() {
var total = 3;
  var puntos = 0;

  var myforms = document.forms["triviaHard"];

  var respuestas = ["a","c","b"];

  for (var i = 1; i<= total; i++) {
    if (myforms["p"+i].value===null || myforms["p"+i].value==="") {
      alert ("Por favor responde a la pregunta "+i);
      return false;
    } else{
      if (myforms["p"+i].value===respuestas[i-1]) {
        puntos++;
      }
    }
  }
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Obtuviste " + puntos + " de " + total + " puntos.";
  return false;
};



