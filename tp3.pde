//Juana Chancelier Cucchetti
//Comisión 1 
// tp 3 https://youtu.be/-XoK1RQOd8g

PFont tit, text; 
String pantalla;
PImage ciudad []=new PImage [18];
int cant=18;
boolean boton;
int estrellas = 10;
float [] []stars = new float[estrellas][2]; 
float random;
void setup(){
  size (600,600);
  tit = loadFont ("titulo.vlw");
  text = loadFont ("text.vlw");
for(int i= 0; i< cant; i++){
ciudad[i]=loadImage ("ciudad"+i+".jpeg");
 pantalla="tit";
}
  }

void draw(){
  background (0);
  textAlign (CENTER);
   
 
 
  if  (pantalla.equals("tit")) {
  planeta (50,550,200);
  textFont (tit,150);
  text ("The city",width/2, height/2);
   textFont (text,15);
    text ("empezar",width/2, 530);
    push ();
    fill (255,255,255,50);
 rect (200, 500, 200, 50, 100);
 planeta (mouseX,mouseY,80);
 pop();
     }
      if  (pantalla.equals("creditos")) {
    for (int i=0; i<estrellas; i++) {
    stars[i][0] = random(width);
    stars[i][1] = random(height);
    push ();
    fill (255,255,255,30);
    ellipse(stars[i][0],stars[i][1], 5,5);
     pop();
  }
 fill (255);
  textFont (tit,150);
  text ("Ray \nBradbury",width/2, 250);
   textFont (text,15);
    text ("Juana Chancelier Cucchetti",width/2, 530);
    push ();
    rotate (radians(2));
 planeta (550,50,200);
 planeta (mouseX,mouseY,80);
 pop();
 rect (20, 560, 80, 30,50);
  fill (0);
 text ("VOLVER", 60, 580);
     }
     noStroke();
      textFont (text,15);
    
if  (pantalla.equals("inicio")) {
  image (ciudad[0], 0,0, 600,600); 
  fill (0);
   rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 130);
   fill (255);
   text (textos [0], 15, 30, 570, 180);
   text ("ATERRIZAJE", 100, 560);
   }
   if  (pantalla.equals("uno")) {
     image (ciudad[1], 0,0, 600,600); 
   fill (0);
   rect (10, 520, 180, 70, 30);
   rect (410, 520, 180, 70, 30);
   rect (10, 25, 580, 80);
   fill (255);
   text (textos [1], 15, 30, 570, 120);
   text ( "perros" ,100, 560);
   text( "humanos",500, 560);
   }
   if  (pantalla.equals("dos")) {
     image (ciudad[2], 0,0, 600,600); 
        fill (0);
    rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 80);
   fill (255);
   text (textos [2], 15, 30, 570, 200);
   text ( "continuar" ,100, 560);
   }
   if  (pantalla.equals("tres")) {
     image (ciudad[3], 0,0, 600,600); 
   fill (0);
    rect (10, 520, 180, 70, 30);
   rect (410, 520, 180, 70, 30);
   rect (10, 25, 580, 80);
   fill (255);
   text (textos [3], 15, 30, 570, 200);
   text ( "siguen el olor" ,80, 560);
   text( "vuelven al cohete",480, 560);
   }
    if  (pantalla.equals("cuatro")) {
      image (ciudad[4], 0,0, 600,600); 
   fill (0);
    rect (10, 520, 180, 70, 30);
   rect (410, 520, 180, 70, 30);
   rect (10, 25, 580, 80);
   fill (255);
   text (textos [4], 15, 30, 570, 200);
    text ( "se hacen amigos" ,80, 560);
   text( "vuelven al cohete",480, 560);
   }
   if  (pantalla.equals("cinco")) {
     image (ciudad[5], 0,0, 600,600); 
  fill (0);
    rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 20);
   fill (255);
   text (textos [5], 15, 30, 570, 200);
      text ( "REINICIAR" ,100, 560);
   }
   if  (pantalla.equals("seis")) {
     image (ciudad[6], 0,0, 600,600); 
    fill (0);
    rect (10, 520, 180, 70, 30);
   rect (410, 520, 180, 70, 30);
   rect (10, 25, 580, 80);
   fill (255);
   text (textos [6], 15, 30, 580, 200);
   text ( "siguen a Smith" ,90, 560);
   text( "investigan",500, 560);
   }
    if  (pantalla.equals("siete")) {
      image (ciudad[7], 0,0, 600,600); 
  fill (0);
    rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 60);
   fill (255);
   text (textos [7], 15, 30, 570, 200);
     text ( "REINICIAR" ,100, 560);
   }
   if  (pantalla.equals("ocho")) {
     image (ciudad[8], 0,0, 600,600); 
   fill (0);
    rect (10, 520, 180, 70, 30);
   rect (410, 520, 180, 70, 30);
   rect (10, 25, 580, 90);
   fill (255);
   text (textos [8], 15, 30, 570, 200);
   text ( "ventanas" ,100, 560);
   text( "atardecer",500, 560);
   }
   if  (pantalla.equals("nueve")) {
     image (ciudad[9], 0,0, 600,600); 
  fill (0);
    rect (10, 520, 180, 70, 30);
   rect (410, 520, 180, 70, 30);
   rect (10, 25, 580, 65);
   fill (255);
   text (textos [9], 15, 30, 570, 200);
    text ( "quedarse" ,100, 560);
   text( "volver",500, 560);
   }
    if  (pantalla.equals("diez")) {
      image (ciudad[10], 0,0, 600,600); 
   fill (0);
    rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 65);
   fill (255);
   text (textos [10], 15, 30, 570, 200);
   text ( "REINICIAR" ,100, 560);
   }
   if  (pantalla.equals("once")) {
     image (ciudad[11], 0,0, 600,600); 
   fill (0);
    rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 200);
   fill (255);
   text (textos [11], 15, 30, 570, 200);
   text ( "continuar" ,100, 560);
   }
   if  (pantalla.equals("doce")) {
   image (ciudad[12], 0,0, 600,600); 
    fill (0);
    rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 130);
   fill (255);
   text (textos [12], 15, 30, 570, 200);
   text ( "continuar" ,100, 560);
   }
   if  (pantalla.equals("trece")) {
     image (ciudad[13], 0,0, 600,600); 
   fill (0);
    rect (10, 520, 180, 70, 30);
   rect (410, 520, 180, 70, 30);
   rect (10, 25, 580, 100);
   fill (255);
   text (textos [13], 15, 30, 570, 200);
   text ( "Smith" ,100, 560);
   text( "Capitan",500, 560);
   }
   if  (pantalla.equals("catorce")) {
     image (ciudad[14], 0,0, 600,600); 
  fill (0);
    rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 75);
   fill (255);
   text (textos [14], 15, 30, 570, 200);
   text ( "volver a la tierra" ,80, 560);
   }
    if  (pantalla.equals("quince")) {
      image (ciudad[15], 0,0, 600,600); 
  fill (0);
    rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 130);
   fill (255);
   text (textos [15], 15, 30, 570, 200);
   text ( "continuar" ,100, 560);
   }
   if  (pantalla.equals("dieciseis")) {
     image (ciudad[16], 0,0, 600,600); 
  fill (0);
    rect (10, 520, 180, 70, 30);
   rect (10, 25, 580, 65);
   fill (255);
   text (textos [16], 15, 30, 570, 200);
   text ( "¿por que?" ,90, 560);
   }
   if  (pantalla.equals("diecisiete")) {
     image (ciudad[17], 0,0, 600,600); 
   fill (0,0,0,150);
   rect (0,0,width,height);
   fill (255);
    rect (10, 520, 180, 70, 30);
   textFont (tit,27);
   text (textos [17], 15, 45, 570, 440);
    fill (0);
     text ( "REINICIAR" ,100, 560);
   }
   
  }
  boolean boton (int x, int y, float ancho, float alto) {
   if (mouseX>x && mouseX<x+ancho  && mouseY>y && mouseY<y+alto) {
   return true;
   }return false; 
   }
   void mousePressed (){
     if (boton (200, 500, 200, 50) && pantalla== "tit") {
      pantalla="inicio"; 
    }else if (boton (10, 520, 180, 70) && pantalla== "inicio") {
      pantalla="uno"; 
    }else if (boton (10, 520, 180, 70) && pantalla== "uno") {
      pantalla="tres"; 
    }else if (boton (410, 520, 180, 70) && pantalla== "uno") {
      pantalla="dos"; 
    }else if (boton (10, 520, 180, 70) && pantalla== "dos") {
      pantalla="seis"; 
    }else if (boton (10, 520, 180, 70) && pantalla== "tres") {
      pantalla="cuatro"; 
    }else if (boton (410, 520, 180, 70) && pantalla== "tres") {
      pantalla="cinco"; 
    }else if (boton (10, 520, 180, 70) && pantalla== "cuatro") {
      pantalla="siete"; 
    }else if (boton (410, 520, 180, 70) && pantalla== "cuatro") {
      pantalla="cinco"; 
      }else if (boton (10, 520, 180, 70) && pantalla== "cinco") {
      pantalla="tit"; 
    }else if (boton (10, 520, 180, 70) && pantalla== "seis") {
      pantalla="cinco"; 
    }else if (boton (410, 520, 180, 70) && pantalla== "seis") {
      pantalla="ocho"; 
      }else if (boton (10, 520, 180, 70) && pantalla== "siete") {
      pantalla="tit"; 
       }else if (boton (10, 520, 180, 70) && pantalla== "ocho") {
      pantalla="once"; 
    }else if (boton (410, 520, 180, 70) && pantalla== "ocho") {
      pantalla="nueve"; 
      }else if (boton (10, 520, 180, 70) && pantalla== "nueve") {
      pantalla="diez"; 
    }else if (boton (410, 520, 180, 70) && pantalla== "nueve") {
      pantalla="cinco"; 
       }else if (boton (10, 520, 180, 70) && pantalla== "diez") {
      pantalla="tit"; 
   }else if (boton (10, 520, 180, 70) && pantalla== "once") {
      pantalla="doce"; 
        }else if (boton (10, 520, 180, 70) && pantalla== "doce") {
      pantalla="trece"; 
       }else if (boton (10, 520, 180, 70) && pantalla== "trece") {
      pantalla="quince"; 
    }else if (boton (410, 520, 180, 70) && pantalla== "trece") {
      pantalla="catorce"; 
        }else if (boton (10, 520, 180, 70) && pantalla== "catorce") {
      pantalla="cinco"; 
      }else if (boton (10, 520, 180, 70) && pantalla== "quince") {
      pantalla="dieciseis"; 
     } else if (boton (10, 520, 180, 70) && pantalla== "dieciseis") {
      pantalla="diecisiete"; 
         } else if (boton (10, 520, 180, 70) && pantalla== "diecisiete") {
      pantalla="tit"; 
      }else if (boton (0,400,200,200) && pantalla== "tit") {
      pantalla="creditos"; 
      }else if (boton (20,560,80,30) && pantalla== "creditos") {
      pantalla="tit"; 
      }
      }
