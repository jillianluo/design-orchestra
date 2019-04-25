//states
var compose = true;
var play = false;
//compose positions
var placed = false;
var landOn1 = false;
var landOn2 = false;
var landOn3 = false;
var landOn4 = false;
var xPos = [];
var yPos = [];
//add or delete
var add = true;
//horizontal lines
var fixY1 = 100;
var fixY2 = 240;
var fixY3 = 380;
var fixY4 = 520;

var fixY5 = 720;
var fixY6 = 860;
var fixY7 = 1000;
var fixY8 = 1140;

var fixY9 = 1340;
var fixY10 = 1480;
var fixY11 = 1620;
var fixY12 = 1760;
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
playbutton.addEventListener("touchstart", switchtoPlay);
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
    createCanvas(windowWidth, 1850);
    wave1Color1 = color(65, 123, 90);
    wave2Color1 = color(116, 156, 117);
    wave3Color1 = color(178, 189, 126);
    wave4Color1 = color(166, 100, 64);

    wave1Color2 = color(255, 188, 66);
    wave2Color2 = color(255, 113, 39);
    wave3Color2 = color(201, 61, 80);
    wave4Color2 = color(141, 76, 125);

    wave1Color3 = color(43, 65, 98);
    wave2Color3 = color(64, 121, 140);
    wave3Color3 = color(147, 183, 190);
    wave4Color3 = color(215, 179, 119);
    strokeWeight(3);
    imageMode(CENTER);
}

function draw() {
    if (compose) {
        background(250);
        stroke(wave1Color1);
        line(0, fixY1, windowWidth, fixY1);
        stroke(wave2Color1);
        line(0, fixY2, windowWidth, fixY2);
        stroke(wave3Color1);
        line(0, fixY3, windowWidth, fixY3);
        stroke(wave4Color1);
        line(0, fixY4, windowWidth, fixY4);

        stroke(wave1Color2);
        line(0, fixY5, windowWidth, fixY5);
        stroke(wave2Color2);
        line(0, fixY6, windowWidth, fixY6);
        stroke(wave3Color2);
        line(0, fixY7, windowWidth, fixY7);
        stroke(wave4Color2);
        line(0, fixY8, windowWidth, fixY8);

        stroke(wave1Color3);
        line(0, fixY9, windowWidth, fixY9);
        stroke(wave2Color3);
        line(0, fixY10, windowWidth, fixY10);
        stroke(wave3Color3);
        line(0, fixY11, windowWidth, fixY11);
        stroke(wave4Color3);
        line(0, fixY12, windowWidth, fixY12);

        for (let i = 0; i < xPos.length; i++) {
            noStroke();
            if (yPos[i] == fixY1) {
                image(bird1, xPos[i], yPos[i]);
            }
            if (yPos[i] == fixY2) {
                image(bird2, xPos[i], yPos[i]);
            }
            if (yPos[i] == fixY3) {
                image(bird3, xPos[i], yPos[i]);
            }
            if (yPos[i] == fixY4) {
                image(bird4, xPos[i], yPos[i]);
            }
            //ellipse(xPos[i], yPos[i], 50, 50);

        }
    }

    if (play) {

        background(250, 25);
        runTime = frameCount - startFrame;

        if (runTime < 60) {

            byColumn1 = frameCount / 200;
            byFrame1 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX1[i] = i;
                waveY1[i] = map(noise(byColumn1, byFrame1), 0, 1, fixY1 - (runTime), fixY1 + (runTime));
                byColumn1 += 0.005;
            }

            byColumn2 = frameCount / 200;
            byFrame2 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX2[i] = i;
                waveY2[i] = map(noise(byColumn2, byFrame2), 0, 1, fixY2 - (runTime), fixY2 + (runTime));
                byColumn2 += 0.005;
            }

            byColumn3 = frameCount / 200;
            byFrame3 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX3[i] = i;
                waveY3[i] = map(noise(byColumn3, byFrame3), 0, 1, fixY3 - (runTime), fixY3 + (runTime));
                byColumn3 += 0.005;
            }

            byColumn4 = frameCount / 200;
            byFrame4 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX4[i] = i;
                waveY4[i] = map(noise(byColumn4, byFrame4), 0, 1, fixY4 - (runTime), fixY4 + (runTime));
                byColumn4 += 0.005;
            }

        } else {

            //create positions for waves
            byColumn1 = frameCount / 200;
            byFrame1 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX1[i] = i;
                waveY1[i] = map(noise(byColumn1, byFrame1), 0, 1, fixY1 - 60, fixY1 + 60);
                byColumn1 += 0.005;
            }

            byColumn2 = frameCount / 200;
            byFrame2 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX2[i] = i;
                waveY2[i] = map(noise(byColumn2, byFrame2), 0, 1, fixY2 - 60, fixY2 + 60);
                byColumn2 += 0.005;
            }

            byColumn3 = frameCount / 200;
            byFrame3 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX3[i] = i;
                waveY3[i] = map(noise(byColumn3, byFrame3), 0, 1, fixY3 - 60, fixY3 + 60);
                byColumn3 += 0.005;
            }

            byColumn4 = frameCount / 200;
            byFrame4 += 0.01;
            for (let i = 0; i < windowWidth; i++) {
                waveX4[i] = i;
                waveY4[i] = map(noise(byColumn4, byFrame4), 0, 1, fixY4 - 60, fixY4 + 60);
                byColumn4 += 0.005;
            }
        }

        //draw waves
        for (let i = 0; i < windowWidth; i++) {
            stroke(wave1Color1);
            point(waveX1[i], waveY1[i]);  //wave line
            //line(waveX1[i], waveY1[i] - 100, waveX1[i], waveY1[i] + 100); //wave block
            stroke(wave2Color1);
            point(waveX2[i], waveY2[i]);
            //line(waveX2[i], waveY2[i] - 100, waveX2[i], waveY2[i] + 100);
            stroke(wave3Color1);
            point(waveX3[i], waveY3[i]);
            //line(waveX3[i], waveY3[i] - 100, waveX3[i], waveY3[i] + 100);
            stroke(wave4Color1);
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
                if (cueTime[i] - runTime > 0) {
                    opa = round(map(cueTime[i] - runTime, 60, 0, 0, 255));
                    tint(255, opa);
                }
                if (yPos[i] == fixY1) {
                    image(bird1, xPos[i], yPos[i]);
                }
                if (yPos[i] == fixY2) {
                    image(bird2, xPos[i], yPos[i]);
                }
                if (yPos[i] == fixY3) {
                    image(bird3, xPos[i], yPos[i]);
                }
                if (yPos[i] == fixY4) {
                    image(bird4, xPos[i], yPos[i]);
                }
                if (frameCount - cueTime[i] > 45) {
                    cued = false;
                }
            }
        }
    }
}

function touchStarted() {
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
            if (mouseY > fixY1 - 50 && mouseY < fixY1 + 50) {
                placed = true;
                landOn1 = true;
            } else if (mouseY > fixY2 - 50 && mouseY < fixY2 + 50) {
                placed = true;
                landOn2 = true;
            } else if (mouseY > fixY3 - 50 && mouseY < fixY3 + 50) {
                placed = true;
                landOn3 = true;
            } else if (mouseY > fixY4 - 50 && mouseY < fixY4 + 50) {
                placed = true;
                landOn4 = true;
            }
            //add x and y position to the array, align y position on the line
            if (placed) {
                xPos.push(mouseX);
                if (landOn1) {
                    yPos.push(fixY1);
                } else if (landOn2) {
                    yPos.push(fixY2);
                } else if (landOn3) {
                    yPos.push(fixY3);
                } else if (landOn4) {
                    yPos.push(fixY4);
                }
                placed = false;
                landOn1 = false;
                landOn2 = false;
                landOn3 = false;
                landOn4 = false;
            }

        }
        console.log(xPos);
        console.log(yPos);
        add = true;
    }
    return false;
}


