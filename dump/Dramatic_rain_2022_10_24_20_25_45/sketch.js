let numberOfCircles = 10;
let answsers;
let colorsOfCircles;
let numberOfMatches;
let prompt = "Click on a Square";

function setup() {
  createCanvas(400, 400);
  resetGame();
}

//beauty of reuse from functions
//called from both setup and mouseReleased
function resetGame() {
  colorsOfCircles = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  numberOfMatches = 0;
  answers = [int(random(0,4)), int(random(5,9))];
  prompt = "Click on a Square";
}

function draw() {
  background(220);
  for (var i = 0; i < numberOfCircles; i++) {
    //use an array to keep track of colors of circles
    if (colorsOfCircles[i] == 1) {
      fill(255, 0, 0);
    } else {
      fill(255, 255, 255);
    }
    rect(i * 40, 150, 40, 40);
  }
  //do text prompt
  fill(255,0,0);
  textSize(30);
  text(prompt, 10, 30);
}

function mousePressed() {
  //use math to figure out which circle you clicked
  let percentageAcrossScreen = mouseX / width;
  let whichCircle = round(numberOfCircles *percentageAcrossScreen );
  print(whichCircle);
  //go through answers and see if clicked is one
  for (var i = 0; i < answers.length; i++) {
    if (whichCircle == answers[i]) { //they click on an answer
      numberOfMatches++;
      colorsOfCircles[whichCircle] = 1;
      if (numberOfMatches == 1){
        prompt = "Great Find The Other";
      }else if (numberOfMatches == 2) { //show both answers
        colorsOfCircles[answers[0]] = 1;
        colorsOfCircles[answers[1]] = 1;
        prompt = "Winner";
      }
    }
  }
}

function mouseReleased() {
  colorsOfCircles = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (numberOfMatches == 2) {
    resetGame()
  }
}