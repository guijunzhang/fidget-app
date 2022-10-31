let on = false

let x = 250
let y = 300
let d = 10

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0, 150, 225);

  if (on) {
    stroke(0, 225, 0);
    line(x, y, x, y - 100);
  }

  noStroke();
  fill(0, 200, 0);
  rect(0, 300, 500, 100);

  noStroke();
  fill(200, 0, 200);
  ellipse(x, 150, 100, 100);

  fill(0, 0, 0);

  noStroke()
  ellipse(x, y, d, d);

  noStroke()
  ellipse(x, y - 100, d, d);
  text('1', 256, 205);

  ellipse(x + 70, y - 70, d, d)
  text('2', 305, 235)

  ellipse(x + 50, y - 150, d, d);
  text('3', 305, 155);

  ellipse(x + 70, y - 230, d, d);
  text('4', 305, 75);

  ellipse(x, y - 200, d, d);
  text('5', 260, 105)

  ellipse(x - 70, y - 230, d, d);
  text('6', 190, 75)

  ellipse(x - 50, y - 150, d, d);
  text('7', 185, 155)

  ellipse(x - 70, y - 70, d, d);
  text('8', 190, 235);



}

function mousePressed() {
  console.log(mouseX, mouseY);
  if (mouseX > 245 && mouseX < 255 && mouseY > 295 && mouseY < 305) {
    on = true;
  }
}