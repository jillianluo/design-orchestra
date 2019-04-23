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
var byColumn1 = 0;
var byFrame1 = 100;

var waveX2 = [];
var waveY2 = [];
var byColumn2 = 50;
var byFrame2 = 150;

var waveX3 = [];
var waveY3 = [];
var byColumn3 = 100;
var byFrame3 = 200;

var waveX4 = [];
var waveY4 = [];
var byColumn4 = 150;
var byFrame4 = 250;

var cueTime = [];
var cued = false;

var opacity;

//switch to play screen when button is pushed
var playbutton = document.getElementById("playkey");
playbutton.addEventListener("click", switchtoPlay);

function preload() {
    bird1 = loadImage('assets/bird1.png');
    bird2 = loadImage('assets/bird2.png');
    bird3 = loadImage('assets/bird3.png');
    bird4 = loadImage('assets/bird4.png');
}

function switchtoPlay() {
    compose = false;
    play = true;
    startFrame = frameCount;
    console.log(xPos);
    console.log(startFrame);
    //clear canvas
    background(250);
    console.log(compose);
    console.log(play);
    for (let i = 0; i < xPos.length; i++) {
        cueTime[i] = map(xPos[i], 0, windowWidth, 0, 300);
    }
    console.log(cueTime);
}

//canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
    waveColor1 = color(65, 123, 90);
    waveColor2 = color(116, 156, 117);
    waveColor3 = color(178, 189, 126);
    waveColor4 = color(166, 100, 64);
    strokeWeight(3);
    imageMode(CENTER);
}

function draw() {
    if (compose) {
        background(250);
        stroke(waveColor1);
        line(0, L1y, windowWidth, L1y);
        stroke(waveColor2);
        line(0, L2y, windowWidth, L2y);
        stroke(waveColor3);
        line(0, L3y, windowWidth, L3y);
        stroke(waveColor4);
        line(0, L4y, windowWidth, L4y);

        for (let i = 0; i < xPos.length; i++) {
            noStroke();
            if (yPos[i] == L1y) {
                image(bird1, xPos[i], yPos[i]);
            }
            if (yPos[i] == L2y) {
                image(bird2, xPos[i], yPos[i]);
            }
            if (yPos[i] == L3y) {
                image(bird3, xPos[i], yPos[i]);
            }
            if (yPos[i] == L4y) {
                image(bird4, xPos[i], yPos[i]);
            }
            //ellipse(xPos[i], yPos[i], 50, 50);

        }
    }

    if (play) {

        background(250, 50);
        runTime = frameCount - startFrame;

        if (runTime < 60) {

            byColumn1 = frameCount / 200;
            byFrame1 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX1[i] = i;
                waveY1[i] = map(noise(byColumn1, byFrame1), 0, 1, L1y - (runTime), L1y + (runTime));
                byColumn1 += 0.005;
            }

            byColumn2 = frameCount / 200;
            byFrame2 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX2[i] = i;
                waveY2[i] = map(noise(byColumn2, byFrame2), 0, 1, L2y - (runTime), L2y + (runTime));
                byColumn2 += 0.005;
            }

            byColumn3 = frameCount / 200;
            byFrame3 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX3[i] = i;
                waveY3[i] = map(noise(byColumn3, byFrame3), 0, 1, L3y - (runTime), L3y + (runTime));
                byColumn3 += 0.005;
            }

            byColumn4 = frameCount / 200;
            byFrame4 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX4[i] = i;
                waveY4[i] = map(noise(byColumn4, byFrame4), 0, 1, L4y - (runTime), L4y + (runTime));
                byColumn4 += 0.005;
            }

        } else {

            //create positions for waves
            byColumn1 = frameCount / 200;
            byFrame1 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX1[i] = i;
                waveY1[i] = map(noise(byColumn1, byFrame1), 0, 1, L1y - 60, L1y + 60);
                byColumn1 += 0.005;
            }

            byColumn2 = frameCount / 200;
            byFrame2 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX2[i] = i;
                waveY2[i] = map(noise(byColumn2, byFrame2), 0, 1, L2y - 60, L2y + 60);
                byColumn2 += 0.005;
            }

            byColumn3 = frameCount / 200;
            byFrame3 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX3[i] = i;
                waveY3[i] = map(noise(byColumn3, byFrame3), 0, 1, L3y - 60, L3y + 60);
                byColumn3 += 0.005;
            }

            byColumn4 = frameCount / 200;
            byFrame4 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX4[i] = i;
                waveY4[i] = map(noise(byColumn4, byFrame4), 0, 1, L4y - 60, L4y + 60);
                byColumn4 += 0.005;
            }
        }

        //draw waves
        for (let i = 0; i < windowWidth; i++) {
            stroke(waveColor1);
            point(waveX1[i], waveY1[i]);  //wave line
            //line(waveX1[i], waveY1[i] - 100, waveX1[i], waveY1[i] + 100); //wave block
            stroke(waveColor2);
            point(waveX2[i], waveY2[i]);
            //line(waveX2[i], waveY2[i] - 100, waveX2[i], waveY2[i] + 100);
            stroke(waveColor3);
            point(waveX3[i], waveY3[i]);
            //line(waveX3[i], waveY3[i] - 100, waveX3[i], waveY3[i] + 100);
            stroke(waveColor4);
            point(waveX4[i], waveY4[i]);
            //line(waveX4[i], waveY4[i] - 100, waveX4[i], waveY4[i] + 100);
        }

        //draw icons
        for (let i = 0; i < xPos.length; i++) {
            cueTime[i] = map(xPos[i], 0, windowWidth, 0, 1000);
            if (abs(cueTime[i] - runTime) <= 60) {
                cued = true;
            }
            if (cued) {
                if (yPos[i] == L1y) {
                    if (cueTime[i] - runTime > 0) {
                        opa = round(map(cueTime[i] - runTime, 60, 0, 0, 255));
                        tint(255, opa);
                    }
                    image(bird1, xPos[i], yPos[i]);
                }
                if (yPos[i] == L2y) {
                    if (cueTime[i] - runTime > 0) {
                        opa = round(map(cueTime[i] - runTime, 60, 0, 0, 255));
                        tint(255, opa);
                    }
                    image(bird2, xPos[i], yPos[i]);
                }
                if (yPos[i] == L3y) {
                    if (cueTime[i] - runTime > 0) {
                        opa = round(map(cueTime[i] - runTime, 60, 0, 0, 255));
                        tint(255, opa);
                    }
                    image(bird3, xPos[i], yPos[i]);
                }
                if (yPos[i] == L4y) {
                    if (cueTime[i] - runTime > 0) {
                        opa = round(map(cueTime[i] - runTime, 60, 0, 0, 255));
                        tint(255, opa);
                    }
                    image(bird4, xPos[i], yPos[i]);
                }
                if (frameCount - cueTime[i] > 45) {
                    cued = false;
                }
            }
        }
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


