//Juana Chancelier Cucchetti
//tp1 comisión 1
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
  void setup() {
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
  px = 0;
  py = 0;
  posx = 640;
  posy = 480;
  ancho = 640;
  alto = 480;
  extra = 0;
  imagen = 200;
  opacidad = (255);
  pantalla = "primera";
 
}

void draw () {
  cuenta ++;  
   println (cuenta);
if (cuenta <800) {pantalla = "primera"; }
if (cuenta >=800 && cuenta <1400) {pantalla = "segunda"; }
if (cuenta >=1400 && cuenta <2200) {pantalla = "tercera"; }
if (cuenta >2200) {pantalla = "cuarta"; }

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
    if (posx>0) {posx --;}
   textFont(titulo);
   textAlign(CENTER, CENTER);
   fill (126,164,227);
   text ("República de los niños", ancho+320, 43,120);
   fill (173, 197, 235);
   text ("República de los niños", ancho+320, 40,120);
   if (ancho>0){ ancho--;}

  } else if (pantalla.equals("segunda")) {
    background (121, 161, 46);
    image (repu2, 320, 0, ancho+320, 480);
    if (ancho>0){ ancho--;}
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
    text ("-Parque de juegos mecánicos\n-Paseo en barco\n-Actividades al aire libre\n-Paseo de artesanos\n-Fanfarria\n-Aeropuerto avión\n-Zonas de esparcimiento", alto, 35);
   if (alto >55){ alto--;}
   if (extra <20){extra ++;}
   if (py <200){py ++;}
   if (px <15){px ++;}
   if (opacidad >0) {opacidad --;}

} else if (pantalla.equals ("tercera")){
    background (167, 51, 15);
    image (repu4, px-640, 40, 640, 390);
    if (px< 640) {px++;}
    textFont (texto, 20);
    fill (0);
    textAlign (CENTER, CENTER);
    text ("Inaugurada el 26 de noviembre de 1951, en Manuel B Gonnet, La Plata, Argentina.", px-320, 20);
     textFont (otra, 15);
     text ("El diseño y estilo arquitectónico fue inspirado en una elaborada mezcla \n de estilos medievales, europeos e islámicos aunque también modernos.", px-320,455);
    
    
  }else if (pantalla.equals ("cuarta")){
background (255);
  image (logo2, width/2, height/2, pos+100, pos);
  noStroke ();
  if (pos<200) { pos++;}
  if (mouseX>60 && mouseX <210 && mouseY>60 && mouseY<120 ) {
  fill (241, 105, 131);
  rect (70, 70, 150, 60);
  fill (75, 1, 50);
  textAlign (LEFT, CENTER);
  textFont (otra, 20);
  text ("REINICIAR", 85, 110);
  } else { 
    textFont (otra, 20);
  fill (241, 105, 131);
  rect (70, 70, 150, 60);
  fill (75, opacidad, 50);
  rect (60, 60, 150, 60);
  fill (241, 105, 131);
  text ("REINICIAR", 75, 100);
  if (opacidad >1) {opacidad--;}
}
 
}
}  //corchete cierra void draw

void mousePressed (){
  if (mouseX>60 && mouseX <210 && mouseY>60 && mouseY<120 ) {
  cuenta =0;
  px = 0;
  py = 0;
  posx = 640;
  posy = 480;
  ancho = 640;
  alto = 480;
  extra = 0;
  imagen = 200;
  opacidad = (255);
  pantalla = "final";
  pos = 0;
}
}//corchete cierra void mouse
