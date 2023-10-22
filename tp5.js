//Juana Chancelier Cucchetti
//Tecno 1
//
let juego;
function setup() {
  createCanvas (600, 500);
  juego = new Juego (30);
}
function draw() {
  background (205);
  juego.dibujar();
  juego.ganar();
  juego.teclapresionada (keyCode);
}
function KeyPressed () {
  juego.Empezar (keyCode);
}
