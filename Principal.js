
class Juego {
  constructor (cantarmas) {
    this.fondo = new Imagenes();
    this.canta = cantarmas;
    this.persona = new Personaje(width/2, 325) ;
    this.armas=[];
    for (let i= 0; i<this.canta; i++) {
      this.arY =i*random (-20, 30);
      this.armas[i] = new Arma (i*random (40, 50), this.arY);
    }
  }
  dibujar() {
    this.fondo.displayfondo();
    this.persona.dibujar ();
   if (keyCode === ENTER){
   this.arY++;
   circle (200,200,200);
   }
    for (let i=0; i<this.canta; i++) { 
      this.armas[i].dibujar ();
        this.arY++;
      }
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
  Empezar (keyCode) {
    this.arma.Empezar(keyCode);
  }
}
