//Juana Chancelier Cucchetti
//Tecno 1
//https://youtu.be/jrXCoqHdgK0
let juego;
function setup() {
  createCanvas (600, 500);
  jueguito = new Jueguito (30);
}
function draw() {
  background (205);
  jueguito.dibujar();
  jueguito.teclapresionada (keyCode);

}
/*function KeyPressed () {
  juego.Empezar (keyCode);
}*/
