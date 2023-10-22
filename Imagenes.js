class Imagenes {
  constructor (x,y) {
    this.load ();
    this.x= x;
    this.y= y;
  }
  load () {
    this.imag = [];
    for (let i = 0; i <4; i++) {
      this.imag[i] = loadImage ("data/fondo"+i+".png");
    }
  }
  displayfondo() {
    image(this.imag[0], 0, 0);
    fill (0,120);
    rect (0,0,600,500);
  }
 displayganar() {
      image(this.imag[2], 0, 0,600,500);
    }
    displayperder() {
      image(this.imag[1], 0, 0,600,500);
    }
}
