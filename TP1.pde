PImage repu1;
PImage repu2;
PImage repu3;
PImage repu4;
PImage logo2;
PFont titulo;
PFont texto;
PFont otra;
int cuenta;
int pos=0; 
int px, py, ancho, alto, posx, posy, extra, imagen;
String pantalla;
float opacidad;
void setup (){
  size (640, 480);
  cuenta= 0;
  repu1= loadImage ("repu1.jpg");
  repu2= loadImage ("repu2.jpg");
  repu3= loadImage ("repu3.jpg");
  repu4= loadImage ("repu4.jpg");
  logo2= loadImage ("logo2.png");
  titulo= loadFont ("titulo.vlw");
  texto= loadFont ("letraaa.vlw");
  otra= loadFont ("texto.vlw");
  opacidad = (255);
  px = 0;
  py = 0;
  posx = 640;
  posy = 480;
  ancho = 640;
  alto = 480;
  extra = 0;
  imagen = 200;
  pantalla = "primera";
}//cierre setup

void draw () {
  cuenta ++;  
   println (cuenta);
if (cuenta <700) {
    pantalla = "primera";
  } else if (cuenta >= 700 && cuenta < 1000) {
    pantalla = "segunda";
  } else if (cuenta >=1000 && cuenta < 1500 ){
    pantalla = "tercera";
    } else if (cuenta >= 1500){
    pantalla = "final";
    }
    
    if (pantalla.equals("primera")) {
   background (232,135,75);
   image (repu1, posx, pos, 640, 480);
   fill (232,135,75);
   noStroke();
   rect (posx, 420, 640, 40);
   textFont (texto, 30);
   fill (0);
   textAlign (LEFT, CENTER);
   text (" Parque enmarcado por un bosque, realizado a escala para niños y niñas.   ", posx, 440, 15);
    if (posx>0) {
    posx --; 
  }
   textFont(titulo);
   textAlign(CENTER, CENTER);
   fill (126,164,227);
   text ("República de los niños", ancho+320, 43,120);
   fill (173, 197, 235);
   text ("República de los niños", ancho+320, 40,120);
   if (ancho>0){
   ancho--;
   }
   }else if (pantalla.equals ("segunda")){
   background (121, 161, 46);
    image (repu2, ancho, 0, width/2, 480);
    fill (121, 161, 46);
    noStroke ();
    rect (0, py+15, 350, 230);
    image (repu3, px , py+25, width/2, py);
    rect (500,15, 140, 60);
    textAlign(LEFT);
     fill (opacidad);
    textFont (texto,30);
    text ("Al aire libre", 510, alto);
    textFont (texto,extra);
    text ("-Parque de juegos mecánicos\n-Paseo en barco\n-Actividades al aire libre\n-Paseo de artesanos\n-Fanfarria\n-Aeropuerto avión\n-Zonas de esparcimiento", ancho-300, 35);
    if (ancho>0){ancho --;}
   if (alto >55){ alto--;}
   if (extra <20){extra ++;}
   if (py <200){py ++;}
   if (px <15){px ++;}
   if (opacidad >0) {opacidad --;}
   } else if (pantalla.equals ("tercera")){
   background (121, 161, 46);
    image (repu2, posx, 0, width/2, 480);
    fill (121, 161, 46);
    noStroke ();
    rect (0, py+15, 350, 230);
    image (repu3, px , py+25, width/2, py);
    rect (500,15, 140, 60);
    textAlign(LEFT);
     fill (opacidad);
    textFont (texto,30);
    text ("Al aire libre", 510, alto);
    textFont (texto,extra);
    text ("-Parque de juegos mecánicos\n-Paseo en barco\n-Actividades al aire libre\n-Paseo de artesanos\n-Fanfarria\n-Aeropuerto avión\n-Zonas de esparcimiento", posx-300, 35);
      if (posx >320) {
   posx--; }
   if (alto >55){ alto--;}
   if (extra <20){extra ++;}
   if (py <200){py ++;}
   if (px <15){px ++;}
   if (opacidad >0) {opacidad --;}
   }
}//cierre draw
