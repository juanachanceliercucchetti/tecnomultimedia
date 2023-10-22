//Juana Chancelier Cucchetti
//Tecno 1
//https://youtu.be/jrXCoqHdgK0
let juego;
function setup() {
  createCanvas (600, 500);
  juego = new Juego (30);
}
function draw() {
  background (205);
  juego.dibujar();
  juego.teclapresionada (keyCode);

}
function KeyPressed () {
  juego.Empezar (keyCode);
}
