// Juana Chancelier Cucchetti
// Comisión 1 tp 2
//pP

PImage tri;


void setup (){
size (800, 400);

tri = loadImage ("tri.jpeg");


}
void draw (){
background (0);
image (tri, 0, 0, 400, 400);

for (int arriba1= 400; arriba1<1000; arriba1 +=200){
 push();
translate(arriba1, 100);
inclina (0, 0, 200,200);
 pop();
 }
for (int arriba2= 500; arriba2<1000; arriba2 +=200){
  push();
translate(arriba2, 300);
inclina (0, 0, 200,200);
 pop();
  }

for (int arriba3= 500; arriba3<1000; arriba3 +=200){
  push();
translate(arriba3, 100);
 rotate (radians (180));
inclina (0, 0, 200,200);
 pop();
 }
 
 for (int arriba4= 400; arriba4<1000; arriba4 +=200){

 push();
 translate(arriba4, 300);
 rotate (radians (180));
inclina (0, 0, 200,200);
 pop();
 }
 
 
 image (tri, 0, 0, 400, 400);
 
 
}
void inclina (int posx, int posy, int ancho, int alto) {
  push();
 translate(posx, posy);
triangle(posx-ancho/2, posy+alto/2, 0, -alto/2, ancho/2, alto/2);
 pop(); 
  for (int i=100; i>0; i-=5){
    for (int j=0; j<5; j+=5){
    strokeWeight (5);
    if (i%2==0){
      stroke (255);
    }else{
    stroke (0);
  }
  
 rotate (radians(-1));
  triangle(posx-i, posy+i, 0-j, -i,+i, +i);

 }
}
 }
 
 
 
 


  
