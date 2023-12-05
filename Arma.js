class Arma {
  constructor (Ax, Ay,Aancho, Aalto) {
    this.ax = Ax;
    this.ay = Ay;
    this.ancho = Aancho;
    this.alto = Aalto;
    this.load ();
    this.empezar = false;
    this.cuenta = 0;
    this.vida =true;
  }
  dibujar () {
    if (this.empezar === false) {
      image(this.imagene[2], 0, 0, 600, 500);
    } else if (this.empezar === true && this.vida ===true) {
      image(this.imagene[1], this.ax, this.ay, this.ancho, this.alto);
      this.ay++;
      if (this.ay>height) {
        this.ay= 0;
      }
    }
    if (this.empezar === false && keyCode ===ENTER ){
    this.empezar=true;
    this.cuenta ++;
    }
  }
  
  matar (){
    this.vida = false;
    }
lotoco() {
    if (this.ax>this.px && this.ax+this.an > this.px+this.ancho&& this.ay>this.py && this.ay+this.al <this.py+this.alto){
    this.matar();
    }
  }

  load () {
    this.imagene = [];
    for (let i = 0; i <3; i++) {
      this.imagene[i] = loadImage ("data/imagen"+i+".png");
    }
  }
}
