function setup() {
  createCanvas(600,400);
   background(220);
  drawingContext.setLineDash([5, 15]);
line(0,0,150,150)
  drawingContext.setLineDash([5, 15]);
line(150,150,400,-200)
  
  
}
function draw() {
 
  //line(0,mouseX,600, mouseY);
  //line(600,mouseX,0, mouseY);
  ellipse(mouseX,mouseY,20,20);

}

