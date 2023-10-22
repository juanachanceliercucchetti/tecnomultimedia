class Personaje {
  constructor (x, y) {
    this.px = x;
    this.py = y;
    this.vida = true;
    this.ancho = 140;
    this.alto = 150;
    this.load ();
   
  }

  dibujar () {
    
    if (this.vida) {
     
      image(this.imagen[0], this.px, this.py, this.ancho, this.alto);
    }
  }
  teclapresionada (keyCode) {
    if (keyIsDown (RIGHT_ARROW)) {
      this.moverD();
    }
    if (keyIsDown (LEFT_ARROW)) {
      this.moverI();
    }
  }
  moverD() {
    this.px +=8;
    if (this.px>width) {
      this.px=-70;
    }
  }
  moverI() {
    this.px -=8;
    if (this.px<-140) {
      this.px=width;
    }
  }
  estado() {
  }
  load () {
    this.imagen = [];
    for (let i = 0; i <4; i++) {
      this.imagen[i] = loadImage ("data/imagen"+i+".png");
    }
  }
}
