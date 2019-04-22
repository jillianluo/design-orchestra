var clicked = false;
var xPos = [];
var yPos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(210);
}

function draw() {

  stroke(30);
  line(0, 200, windowWidth, 200);
  line(0, 350, windowWidth, 350);
  line(0, 500, windowWidth, 500);
  line(0, 650, windowWidth, 650);

  if (clicked) {
    append(xPos, mouseX);
    append(yPos, mouseY);
    clicked = false;
  }
  for (var i = 0; i < xPos.length; i++) {
    noStroke();
    fill(80, 180, 200);
    ellipse(xPos[i], yPos[i], 50, 50);
  }

}

function mouseClicked() {
  clicked = true;
}


