class Jueguito {
  constructor (cantarmas) {
    this.fondo = new Images();
    this.canta = cantarmas;
    this.persona = new Persona(width/2, 325, 140, 150) ;
    this.armas=[];
    for (let i= 0; i<this.canta; i++) {
      this.arY =i*random (-100, 10);
      this.arX =i*random (40, 50)
      this.armas[i] = new Arma (this.arX, this.arY, 12, 48);
    }
  }
  dibujar() {
    this.fondo.displayfondo();
    this.persona.dibujar ();
    for (let i=0; i<this.canta; i++) {
      this.armas[i].dibujar ();
      this.arY++;
       if (this.armas[i].ay > this.persona.py && this.armas[i].ay < this.persona.py + this.persona.alto && this.armas[i].ax > this.persona.px && this.armas[i].ax <  this.persona.px + this.persona.ancho/2) {
        this.perder();
        this.cuchillos.empezar = false;
      }
    }
    this.controlarNavajaenPersona();
  }
  ganar() {
    this.fondo.displayganar();
  }
  perder() {
    this.fondo.displayperder();
  }
  teclapresionada (keyCode) {
    this.persona.teclapresionada (keyCode);
  }
  controlarNavajaenPersona() {
    for (let i= 0; i<this.canta; i++) {
      this.armas[i].lotoco() ;
    }
  }
}
