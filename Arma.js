class Arma {
  constructor (x, y) {
    this.ax = x;
    this.ay = y;
this.load ();
   
  }
  dibujar () {
     image(this.imagen[1], this.ax, this.ay, 12, 48);
  }
 
  load () {
    this.imagen = [];
    for (let i = 0; i <4; i++) {
      this.imagen[i] = loadImage ("data/imagen"+i+".png");
    }
  }
}
