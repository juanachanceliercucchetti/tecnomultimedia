//Juana CHancelier CUcchetti
//Comisión 1
//https://youtu.be/F0gY936Ox4Q

let cuad = [];
let imagen = [];
let texto = [];
let cantidad = 10; //imagenes
let cant = 12; //grilla
let canbanderas = 0;
let pantalla = "inicio";
let ax, ay, azulx, rojox;
let auy =0;
let aux =0;
let ancho= 50;
let tam = 40;
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
    image (imagen[9], 0, 0, 800, 500);
  } else if (pantalla === "ins") {
    background ( 220, 148, 68);
    fill (214, 18, 10);
    textAlign (CENTER);
    textSize (60);
    text ("INSTRUCCIONES", width/2, height/5);
    text ("namco", width/2, 450);
    fill (255);
    textSize (40);
    text ("Evita chocar con las rocas \n  Esquiva los autos rojos \n Agarra las bandera para ganar", width/2, 200);
    noStroke ();
    rect (755, 40, 50, 50);
    image  (imagen[0], 730, 20, 40, 40);
  } else if (pantalla === "juego1") {
    if (canbanderas ===10) {
      pantalla = "ganar";
      canbanderas=0;
      ax=0;
      ay=0;
    }
    image (imagen[8], 0, 0, 800, 500);

    noStroke();
    //background ( 220, 148, 68);
    //barra();
    for (let i=0; i<cant; i++) {
      for (let j=0; j<cant; j++) {
        if (cuad[i][j]) {
          fill (253, 189, 141);
          keyisPressed = false;
        } else if (!cuad[i][j]) {
          noFill();
          keyisPressed = true;
        }
        rect(i*ancho, j*ancho, ancho, ancho);
      }
    }
    fill (255);
    rect (ax>350 && ax< 350+ancho && ay >150 && ay<150+ancho);
    if (arriba (ax, ay, 100, 250, ancho) ||arriba (ax, ay, 350, 150, ancho)||arriba (ax, ay, 350, 350, ancho)||arriba (ax, ay, 100, auy, tam) ||arriba (ax, ay, 250, auy, tam)||arriba (ax, ay, aux, 450, tam) ) { //ROCAS y autos
      pantalla = "perder";
      ax=0;
      ay=0;
    }

    banderita (ax, ay, 550, 250, 40);
    image (imagen[2], 625, 275, 50, 50);
    text ("x"+ canbanderas, 675, 290, 40, 40);
    image (imagen[4], 350, 150, ancho, ancho);
    image (imagen[4], 100, 250, 50, 50);
    image (imagen[4], 350, 350, 50, 50);
    image (imagen[0], ax, ay, tam, tam);
    image (imagen[1], aux, 450, tam, tam);
    image (imagen[1], 100, auy, tam, tam);
    image (imagen[1], 250, auy, tam, tam);


    if (auy<150) {
      auy+=2;
    } else if (auy === 150) {
      auy=0;
    }
    if (aux<450) {
      aux+=3;
    } else if (aux === 450) {
      aux=0;
    }
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

  let colorpared = get (0, 800);

  if (keyIsPressed === true) { //movimiento del auto
    if (keyCode===RIGHT_ARROW && pantalla === "juego1" && ax<550 && blue (colorpared) <80) {
      // image (imagen[0], ax, ay, tam, tam);
      ax+= 3;
    } else if (keyCode===LEFT_ARROW && pantalla === "juego1" && ax>0 ) {
      //image (imagen[6], ax, ay, tam, tam);
      ax-=3;
    } else if (keyCode===UP_ARROW && pantalla === "juego1" && ay>0 ) {
      //  image (imagen[7], ax, ay, tam, tam);
      ay-= 3;
    } else if (keyCode===DOWN_ARROW && pantalla === "juego1" && ay<450  ) {
      //  image (imagen[5], ax, ay, tam, tam);
      ay+=3;
    } else if (keyCode===ENTER && pantalla === "perder") {
      fill (0);
      pantalla = "inicio";
    }
  }
}
function banderita (ax, ay, x, y, tam) {
  if (arriba (ax, ay, x, y, tam)) {
    canbanderas ++;
  } else {
    image (imagen[2], x, y, tam, tam);
  }
}

function autos (pos, valor, inicio) {
  if (pos<valor) {
    pos+=2;
  } else if (pos === valor) {
    pos=0;
  }
}
function barra () {
  background (251, 147, 67);
  fill (0);
  rect (700, 250, 200, 500);
  fill (246, 4, 146);
  rect (755, 40, 50, 50);
  rectMode(CORNER);
  fill (200, 20, 50, 80);
}
function mousePressed () { //estados
  if (botonauto (50, 450, 150, 50) ||botonauto (550, 450, 150, 50)  && pantalla === "inicio") {
    fill(0);
    ax=0;
    ay=0;
    canbanderas=0;
    pantalla= "juego1";
  } else if (botonauto (300, 450, 170, 50) && pantalla === "inicio") {
    fill(0);
    pantalla= "ins";
  } else if (botonauto (730, 15, 50, 50) && pantalla === "ins" ||botonauto (730, 15, 50, 50) && pantalla === "juego1") {
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
    pantalla= "juego1";
  }
}

function botonauto (x, y, ancho, alto) { //funcion que use para los botones
  if (mouseX> x && mouseX<x+ancho && mouseY>y && mouseY<y+alto) {
    return true;
  }
}
function arriba (ax, ay, x, y, tam) {
  if (ax> x-tam/2 && ax< x+tam/2 && ay > y-tam/2 && ay<y+tam/2) {
    return true;
  }
}
function mapa1() {
  for (let i=0; i<12; i++) {
    for (let j=0; j<12; j++) {
      cuad[8][0] = true;
      cuad[9][0] = true;
      cuad[10][0] = true;
      cuad[1][1] = true;
      cuad[3][1] = true;
      cuad[4][1] = true;
      cuad[1][2] = true;
      cuad[3][2] = true;
      cuad[4][2] = true;
      cuad[6][2] = true;
      cuad[7][2] = true;
      cuad[8][2] = true;
      cuad[10][2] = true;
      cuad[11][2] = true;
      cuad[10][3] = true;
      cuad[11][3] = true;
      cuad[1][4] = true;
      cuad[2][4] = true;
      cuad[3][4] = true;
      cuad[5][4] = true;
      cuad[6][4] = true;
      cuad[8][4] = true;
      cuad[5][5] = true;
      cuad[6][5] = true;
      cuad[8][5] = true;
      cuad[9][5] = true;
      cuad[1][6] = true;
      cuad[2][6] = true;
      cuad[5][6] = true;
      cuad[6][6] = true;
      cuad[9][6] = true;
      cuad[11][6] = true;
      cuad[1][7] = true;
      cuad[2][7] = true;
      cuad[4][7] = true;
      cuad[5][7] = true;
      cuad[6][7] = true;
      cuad[11][7] = true;
      cuad[1][8] = true;
      cuad[2][8] = true;
      cuad[4][8] = true;
      cuad[5][8] = true;
      cuad[6][8] = true;
      cuad[8][8] = true;
      cuad[11][8] = true;
      cuad[10][9] = true;
      cuad[11][9] = true;
    }
  }
}
