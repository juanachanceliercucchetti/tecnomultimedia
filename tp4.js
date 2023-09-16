let cuad = [];
let imag = [];
let imagen = [];
let texto = [];
let cantidad = 5;
let cant = 12;
let canbanderas =0;
let pantalla = "inicio";
let ax, ay, azulx, rojox;
let ancho= 50;
let tam=40;
let bandera  = [];

function preload() {
  for (let i=0; i<cantidad; i++) {
    imagen.push(loadImage('data/imagen'+i+'.png'));
  }
}
function setup() {
  createCanvas(800, 500);
  ax=0;
  ay=0;
  azulx=110;
  rojox=110;
  for (let i=0; i<cant; i++) {
    cuad[i] = [];
    for (let j=0; j<cant; j++) {
      cuad[i][j] = false;
    }
  }
}

function draw() {
  rectMode (CENTER);

  if (pantalla === "inicio" ) {
    background (0);
    image (imagen[3], 0, 0, 800, 500);
    textAlign (CENTER);
    textSize (30);
    text ("Jugar partida", width/2, 410);
    text ("Instrucciones", width/2, 460);
  } else if (pantalla === "ins") {
    background ( 220, 148, 68);
    fill (214, 18, 10);
    textAlign (CENTER);
    textSize (60);
    text ("INSTRUCCIONES", width/2, height/5);
    text ("namco", width/2, 450);
    fill (255);
    textSize (40);
    text ("Evita chocar \n agarra las banderas", width/2, 200);
    noStroke ();
    rect (755, 40, 50, 50);
    image  (imagen[0], 730, 20, 40, 40);
  } else if (pantalla === "juego") {
    if (canbanderas ===10) {
      pantalla = "ganar";
    }
    background (251, 147, 67);
    fill (0);
    rect (700, 250, 200, 500);
    fill (246, 4, 146);
    rect (755, 40, 50, 50);
    rectMode(CORNER);
    fill (200, 20, 50, 80);

    mapa1();
    noStroke();
    for (let i=0; i<cant; i++) {
      for (let j=0; j<cant; j++) {
        if (cuad[i][j]) {
          fill (255, 100);
        } else if (!cuad[i][j]) {
          noFill();
        }
        rect(i*ancho, j*ancho, ancho, ancho);
      }
    }
    fill (255);
    
    rect (ax>350 && ax< 350+ancho && ay >150 && ay<150+ancho);
    if (ax >350-tam/2 && ax< 350+ancho/2 && ay >150-tam/2 && ay<150+ancho/2) {
      pantalla = "perder";
      ax=0;
      ay=0;
    } else  if (ax >100-tam/2 && ax< 100+ancho/2 && ay >250-tam/2 && ay<250+ancho/2) {
      pantalla = "perder";
      ax=0;
      ay=0;
    }
    banderita (100, 50, 40);
    banderita (200, 150, 40);
    banderita (150, 350, 40);
    banderita (400, 450, 40);
    banderita (50, 450, 40);
    banderita (500, 50, 40);
    banderita (250, 100, 40);
    banderita (550, 250, 40);
    banderita (0, 200, 40);
    banderita (350, 350, 40);
    if (ax == 100-tam/2 && ax< 100+tam/2 && ay >50-tam/2 && ay<50+tam/2) {
      canbanderas +=1;
    }
    if (ax >200-tam/2 && ax< 200+tam/2 && ay >150-tam/2 && ay<150+tam/2) {
      canbanderas +=1;
    }
     if (ax >150-tam/2 && ax< 150+tam/2 && ay >350-tam/2 && ay<350+tam/2) {
      canbanderas +=1;
    }
    if (ax >400-tam/2 && ax< 400+tam/2 && ay >450-tam/2 && ay<450+tam/2) {
      canbanderas +=1;
    }
    if (ax >50-tam/2 && ax< 50+tam/2 && ay >450-tam/2 && ay<450+tam/2) {
      canbanderas +=1;
    }
    if (ax >500-tam/2 && ax< 500+tam/2 && ay >50-tam/2 && ay<50+tam/2) {
      canbanderas +=1;
    }
     if (ax >250-tam/2 && ax< 250+tam/2 && ay >100-tam/2 && ay<100+tam/2) {
      canbanderas +=1;
    }
if (ax >550-tam/2 && ax< 550+tam/2 && ay >250-tam/2 && ay<250+tam/2) {
      canbanderas +=1;
    }
    if (ax >0-tam/2 && ax< 0+tam/2 && ay >200-tam/2 && ay<200+tam/2) {
      canbanderas +=1;
    }
     if (ax >350-tam/2 && ax< 350+tam/2 && ay >350-tam/2 && ay<350+tam/2) {
      canbanderas +=1;
    }
    if (canbanderas === 10) {
      pantalla = "ganar";
      ax=0;
      ay=1;
    }
    image (imagen[2], 625, 275, 50, 50);

    text ("x"+ canbanderas, 675, 290, 40, 40);
    image (imagen[4], 350, 150, ancho, ancho);
    image (imagen[4], 100, 250, 50, 50);

    image (imagen[0], ax, ay, tam, tam);
    rectMode (CENTER);
  } else if (pantalla === "ganar") {
    background (251, 147, 67);
    fill (255);
    textAlign (CENTER);
    textSize (100);
    text ("WINNER!", width/2, 150);
    textSize (20);
    textAlign (LEFT);
    text ("inicio", 200, 330);
    image (imagen[1], rojox, 380, 80, 80 );
    text ("reanudar", 200, 430);
    image (imagen[0], azulx, 285, 80, 80 );
  } else if (pantalla === "perder") {
    background (0);
    fill (200);
    textAlign (CENTER);
    textSize (80);
    text ("GAME\nOVER", width/2, height/2);
    textSize (14);
    fill (150);
    text ("presiona 'ENTER' para volver al inicio", width/2, 450);
  }
  if (keyIsPressed) { //movimiento del auto
    if (keyCode===RIGHT_ARROW && pantalla === "juego" && ax<550 ) {
      ax+= 3;
    } else if (keyCode===LEFT_ARROW && pantalla === "juego" && ax>0 ) {
      ax-=3;
    } else if (keyCode===UP_ARROW && pantalla === "juego" && ay>0 ) {
      ay-= 3;
    } else if (keyCode===DOWN_ARROW && pantalla === "juego" && ay<450  ) {
      ay+=3;
    } else if (keyCode===ENTER && pantalla === "perder") {
      fill (0);
      pantalla = "inicio";
    }
  }
}

function banderita (x, y, tam) {
  image (imagen[2], x, y, tam, tam);
}


function mousePressed () { //estados
  if (botonauto (300, 375, 200, 50) && pantalla === "inicio") {
    fill(0);
    pantalla= "juego";
  } else if (botonauto (300, 425, 200, 50) && pantalla === "inicio") {
    fill(0);
    pantalla= "ins";
  } else if (botonauto (730, 15, 50, 50) && pantalla === "ins" ||botonauto (730, 15, 50, 50) && pantalla === "juego") {
    fill(0);
    pantalla= "inicio";
  } else if (botonauto (110, 285, 80, 80) && pantalla === "ganar"||botonauto (110, 285, 80, 80) && pantalla === "perder") {
    fill(0);
    pantalla= "inicio";
  } else if (botonauto (110, 380, 80, 80) && pantalla === "ganar"||botonauto (110, 380, 80, 80) && pantalla === "perder") {
    fill(0);
    ax=0;
    ay=0;
    canbanderas=0;
    pantalla= "juego";
    
  }
}

function botonauto (x, y, ancho, alto) { //funcion que use para los botones
  if (mouseX> x && mouseX<x+ancho && mouseY>y && mouseY<y+alto) {
    return true;
  }
}
