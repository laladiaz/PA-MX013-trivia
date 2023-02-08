//esta es una funcion con un for loop para evaluar las respuestas de la trivia.
function verificarRespuestaE(){
//la variable total tiene un valor de 3 porque son 3 preguntas
  var total = 3;
//la variable puntos comienza en 0 para que mas adelante se pueda incrementar en 1 cada vez que el jugador acierte
  var puntos= 0;
//la variable myForm hace referencia al formulario. Con document.forms obtenemos un objeto con los elementos de form.
  var myForm = document.forms["triviaEasy"];

  var respuestas= ["b","a","c"];

  for(var i=1; i<= total; i ++){
    if(myForm["p" + i].value=== null || myForm["p" + i].value ==="") {
      alert("Por favor responde la respuesta " + i);
      return false;
    }else{
      if(myForm["p"+ i].value=== respuestas[ i-1 ]){
       puntos++;
      }
    }
  }
var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Obtuviste " + puntos + " de " + total + " puntos.";
  return false;
};
