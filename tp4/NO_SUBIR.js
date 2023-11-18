/* banderita (ax, ay, 100, 50, 40);
    banderita (ax, ay, 200, 150, 40);
    banderita (ax, ay, 150, 350, 40);
    banderita (ax, ay, 400, 450, 40);
    banderita (ax, ay, 50, 450, 40);
    banderita (ax, ay, 500, 50, 40);
    banderita (ax, ay, 250, 100, 40);
    BANDERAS
    banderita (ax, ay, 0, 200, 40);
    banderita (ax, ay, 350, 350, 40);
    */ 
    /*textAlign (CENTER);
    textSize (30);
    text ("Jugar partida", width/2, 410);
    text ("Instrucciones", width/2, 460);*/
/*function banderita (ax, ay, x, y, tam) {
  if (arriba (ax, ay, x, y, tam)) {
    agarrobandera = true;
    canbanderas ++;
  } else {
    image (imagen[2], x, y, tam, tam);
    agarrobandera = false;
  }
}
/*
/* function keyPressed() {
  if (keyCode===RIGHT_ARROW && celda[px+1][py]===false) {
    px++;
  }
  if (keyCode===LEFT_ARROW && !celda[px-1][py]) {
    px--;
  }
  if (keyCode===UP_ARROW && !celda[px][py-1]) {
    py--;
  }
  if (keyCode===DOWN_ARROW && !celda[px][py+1]) {
    py++;
  }
}
if keyIsPressed (botonauto (110,285, 80, 80) && pantalla === "ganar") { 
    azulx +=10;
  }
  
  function laberinto(num) {
  if (num===1) {
    maze1();
  } else if (num===2) {
    maze2();
  } else {
    maze0();
  }
}

  for (let i=0; i<cant; i++) {
    esp[i] = [];
    for (let j=0; j<cant; j++) {
      esp[i][j] = false;
    }
  }
    for (let i = 0; i < 12; i++) { // GUIA
      for (let j = 0; j < 10; j++) {
        rect (i*50, j*50, 50, 50);
      }
      
      }
//  bandera(50, 50, 4, 26, 13, 6)

---------------------------------------------------------------------------------------------BANDERA
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


function ubibanderas (x, y) {
  Bandera (x+175, y+25, 4, 26, 13, 6);
  Bandera (x+25, y+125, 4, 26, 13, 6);
  Bandera (x+75, y+175, 4, 26, 13, 6);
  Bandera (x+275, y+25, 4, 26, 13, 6);
  Bandera (x+325, y+75, 4, 26, 13, 6);
  Bandera (x+25, y+425, 4, 26, 13, 6);
  Bandera (x+75, y+475, 4, 26, 13, 6);
  Bandera (x+375, y+375, 4, 26, 13, 6);
  Bandera (x+575, y+25, 4, 26, 13, 6);
  Bandera (x+525, y+225, 4, 26, 13, 6);
}
EMPIEZA----------------------------------------------------------------------------------------------
    for (let i=0; i<cant; i++) {
    for (let j=0; j<cant; j++) {
    strokeWeight(3);
    stroke(255);
    if (arriba[i][j]) {
      line(i*ancho, j*ancho, i*ancho+ancho, j*ancho );
    } else if (abajo[i][j]) {
      line(i*ancho, j*ancho+ancho, i*ancho+ancho, j*ancho+ancho );
    } else if (izquierda[i][j]) {
      line(i*ancho+ancho, j*ancho, i*ancho+ancho, j*ancho+ancho);
    } else if (derecha[i][j]) {
      line(i*ancho, j*ancho, i*ancho, j*ancho+ancho);
    }
    }
    }

       for (let i=0; i<cant; i++) {
    arriba[i] = [];
    abajo[i] = [];
    izquierda[i] = [];
    derecha[i] = [];
    for (let j=0; j<cant; j++) {
      arriba[i][j] = false;
      abajo[i][j] = false;
      izquierda[i][j] = false;
      derecha[i][j] = false;
    }
  }
      
       ---------------------------------------------------------------------------------------------dibujo
       
       
push();
 noStroke ();
 fill (255, 100);
 rect  (50, 50, 50, 100);
 rect  (150, 50, 100, 100);
 rect (50, 200, 150, 50);
 rect (50, 300, 100, 150);
 rect (200, 350, 150, 100);
 rect (250, 200, 100, 150);
 rect (300, 100, 150, 50);
 rect (400, 0, 150, 50);
 rect (500, 100, 100, 100);
 rect (400, 200, 50, 100);
 rect (450, 250, 50, 100);
 rect (400, 400, 50, 50);
 rect (500, 450, 100, 50);
 rect (550, 300, 50, 150);
 pop();
 */
       
       
