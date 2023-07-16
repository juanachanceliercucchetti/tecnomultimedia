void planeta (float x, float y, float tam){
  fill  (200);
ellipse (x,y,tam, tam);
fill (28);
ellipse (x+tam/6,y-tam/6,tam/5, tam/5);
fill (233,239,249);

ellipse (x-tam/10,y-tam/4,tam/6, tam/6);
stroke (4);
noFill();
ellipse (x-tam/6,y+tam/6,tam/3, tam/3);
}
