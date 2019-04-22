//states
var compose = true;
var play = false;
//compose positions
var placed = false;
var L1 = false;
var L2 = false;
var L3 = false;
var L4 = false;
var xPos = [];
var yPos = [];
//add or delete
var add = true;
//horizontal lines
var L1y = 100;
var L2y = 250;
var L3y = 400;
var L4y = 550;
//waveform initiation state
var initiated = false;
//waveform positions
var waveX1 = [];
var waveY1 = [];
var newY1 = L1y;
var waveX2 = [];
var waveY2 = [];
var newY2 = L2y;
var waveX3 = [];
var waveY3 = [];
var newY3 = L3y;
var waveX4 = [];
var waveY4 = [];
var newY4 = L4y;



//switch to play screen when button is pushed
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

//canvas
function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    if (compose) {
        background(250);
        stroke(120);
        line(0, L1y, windowWidth, L1y);
        line(0, L2y, windowWidth, L2y);
        line(0, L3y, windowWidth, L3y);
        line(0, L4y, windowWidth, L4y);

        for (let i = 0; i < xPos.length; i++) {
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
        background(250);
        //initiate wave form as straight line
        if (!initiated) {
            for (let i = 0; i < windowWidth; i++) {
                waveX1[i] = i;
                waveY1[i] = L1y;
            }
            for (let i = 0; i < windowWidth; i++) {
                waveX2[i] = i;
                waveY2[i] = L2y;
            }
            for (let i = 0; i < windowWidth; i++) {
                waveX3[i] = i;
                waveY3[i] = L3y;
            }
            for (let i = 0; i < windowWidth; i++) {
                waveX4[i] = i;
                waveY4[i] = L4y;
            }
            initiated = true;
        }
        //draw wave
        stroke(120);
        for (let i = 0; i < windowWidth; i++) {
            point(waveX1[i], waveY1[i]);
            point(waveX2[i], waveY2[i]);
            point(waveX3[i], waveY3[i]);
            point(waveX4[i], waveY4[i]);
        }
        //fill color below
        for (let i = 0; i < windowWidth; i++) {
            end1 = color(224, 190, 54);
            end2 = color(160, 202, 146);
            end3 = color(117, 176, 156);
            end4 = color(216, 247, 147);
            stroke(end1);
            line(waveX1[i], waveY1[i], waveX1[i], waveY1[i] + 500);
            stroke(end2);
            line(waveX2[i], waveY2[i], waveX2[i], waveY2[i] + 500);
            stroke(end3);
            line(waveX3[i], waveY3[i], waveX3[i], waveY3[i] + 500);
            stroke(end4);
            line(waveX4[i], waveY4[i], waveX4[i], waveY4[i] + 500);
        }

        //update wave position array

        waveY1.splice(0, 1);
        newY1 = newY1 + random(-2, 2);
        waveY1.push(newY1);

        waveY2.splice(0, 1);
        newY2 = newY2 + random(-2, 2);
        waveY2.push(newY2);

        waveY3.splice(0, 1);
        newY3 = newY3 + random(-2, 2);
        waveY3.push(newY3);

        waveY4.splice(0, 1);
        newY4 = newY4 + random(-2, 2);
        waveY4.push(newY4);

        // regular wave form
        // waveY.push(newY + 10 * sin(frameCount / 50));
        // weird
        // waveY.push(newY + floor(frameCount % 10) * sin(frameCount / 50));

    }


}

function mouseClicked() {
    if (compose) {
        //deleting notes
        for (let i = 0; i < xPos.length; i++) {
            if (dist(mouseX, mouseY, xPos[i], yPos[i]) < 25) {
                xPos.splice(i, 1);
                yPos.splice(i, 1);
                add = false;
            }
        }
        //adding notes
        if (add) {
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
        console.log(xPos);
        console.log(yPos);
        add = true;
    }
}


