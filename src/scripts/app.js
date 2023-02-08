//Pantalla de bienvenida!
//aqui estamos obteniendo el nombre del jugador y guardandola en la función player(). 
function player() {
  //creamos la variable local playerInput donde obtenemos el valor introducido en la casilla input text
  var playerInput = document.getElementById("name").value;
  //Con innerHTML estamos modificanod el elemento con id saludo1
  document.getElementById("saludo1").innerHTML = "Hola " + playerInput;
  //Tambien estamos usando localStorage para guardar el nombre y poder usarlo en otra pagina.
  localStorage.setItem('name', playerInput );
  //Una vez que se introduce el nombre del jugador, se modifica saludo1 y se desaparece la casilla y el boton donde se introduce el nombre
  document.getElementById("divInfo").style.display = "none"
}

//Obtenemos de localStorage el elemento name y lo usamos para modificar el elemento saludo2 de la pagina de juego
document.getElementById("saludo2").innerHTML = "Player: " + localStorage.getItem('name');