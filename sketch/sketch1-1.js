var placed = false;
var L1 = false;
var L2 = false;
var L3 = false;
var L4 = false;
var compose = true;
var play = false;
var xPos = [];
var yPos = [];

var L1y = 200;
var L2y = 350;
var L3y = 500;
var L4y = 650;
//Switch to play screen when button is pushed
var playbutton = document.getElementById("playkey");
playbutton.addEventListener("click", switchtoPlay);

function switchtoPlay() {
    compose = false;
    play = true;
    //clear canvas
    background(240);
    console.log(compose);
    console.log(play);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(240);
}

function draw() {
    if (compose) {
        stroke(30);
        line(0, L1y, windowWidth, L1y);
        line(0, L2y, windowWidth, L2y);
        line(0, L3y, windowWidth, L3y);
        line(0, L4y, windowWidth, L4y);

        for (var i = 0; i < xPos.length; i++) {
            noStroke();
            if (yPos[i] == L1y) {
                fill(251, 139, 36);
            }
            if (yPos[i] == L2y) {
                fill(80, 180, 200);
            }
            if (yPos[i] == L3y) {
                fill(44, 165, 141);
            }
            if (yPos[i] == L4y) {
                fill(200, 100, 150);
            }
            ellipse(xPos[i], yPos[i], 50, 50);
        }
    }

    if (play) {
        stroke(30);
        line(0, L1y, windowWidth, L1y);
        line(0, L2y, windowWidth, L2y);
        line(0, L3y, windowWidth, L3y);
        line(0, L4y, windowWidth, L4y);
    }

}

function mouseClicked() {
    if (compose) {
        //decide the note goes on which line
        if (mouseY > L1y - 50 && mouseY < L1y + 50) {
            placed = true;
            L1 = true;
        } else if (mouseY > L2y - 50 && mouseY < L2y + 50) {
            placed = true;
            L2 = true;
        } else if (mouseY > L3y - 50 && mouseY < L3y + 50) {
            placed = true;
            L3 = true;
        } else if (mouseY > L4y - 50 && mouseY < L4y + 50) {
            placed = true;
            L4 = true;
        }
        //add x and y position to the array, align y position on the line
        if (placed) {
            xPos.push(mouseX);
            if (L1) {
                yPos.push(L1y);
            } else if (L2) {
                yPos.push(L2y);
            } else if (L3) {
                yPos.push(L3y);
            } else if (L4) {
                yPos.push(L4y);
            }
            placed = false;
            L1 = false;
            L2 = false;
            L3 = false;
            L4 = false;
        }
    }
}


