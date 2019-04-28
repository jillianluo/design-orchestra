//states
var compose = true;
var play = false;
//compose positions
var placed = false;
var landOn1 = false;
var landOn2 = false;
var landOn3 = false;
var landOn4 = false;
var landOn5 = false;
var landOn6 = false;
var landOn7 = false;
var landOn8 = false;
var landOn9 = false;
var landOn10 = false;
var landOn11 = false;
var landOn12 = false;
var xPos = [];
var yPos = [];
//add or delete
var add = true;
//horizontal lines
var fixY1 = 80;
var fixY2 = 220;
var fixY3 = 360;
var fixY4 = 500;

var fixY5 = 700;
var fixY6 = 840;
var fixY7 = 980;
var fixY8 = 1120;

var fixY9 = 1320;
var fixY10 = 1460;
var fixY11 = 1600;
var fixY12 = 1740;
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

    city1 = loadImage('assets/city1.png');
    city2 = loadImage('assets/city2.png');
    city3 = loadImage('assets/city3.png');
    city4 = loadImage('assets/city4.png');

    ocean1 = loadImage('assets/ocean1.png');
    ocean2 = loadImage('assets/ocean2.png');
    ocean3 = loadImage('assets/ocean3.png');
    ocean4 = loadImage('assets/ocean4.png');

    bg = loadImage('assets/bg1.png');
}

function switchtoPlay() {
    compose = false;
    play = true;
    document.getElementById("maintitle").style.visibility = "hidden";
    document.getElementById("playkey").style.visibility = "hidden";
    startFrame = frameCount;
    console.log(startFrame);
    //clear canvas
    background(250);
    console.log(compose);
    console.log(play);
}

//canvas
function setup() {
    createCanvas(windowWidth, 1950);
    frameRate(10);
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
            //noStroke();
            //ellipse(xPos[i], yPos[i], 50, 50);
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

            if (yPos[i] == fixY5) {
                image(city1, xPos[i], yPos[i]);
            }
            if (yPos[i] == fixY6) {
                image(city2, xPos[i], yPos[i]);
            }
            if (yPos[i] == fixY7) {
                image(city3, xPos[i], yPos[i]);
            }
            if (yPos[i] == fixY8) {
                image(city4, xPos[i], yPos[i]);
            }

            if (yPos[i] == fixY9) {
                image(ocean1, xPos[i], yPos[i]);
            }
            if (yPos[i] == fixY10) {
                image(ocean2, xPos[i], yPos[i]);
            }
            if (yPos[i] == fixY11) {
                image(ocean3, xPos[i], yPos[i]);
            }
            if (yPos[i] == fixY12) {
                image(ocean4, xPos[i], yPos[i]);
            }
        }
    }

    if (play) {

        //background(250, 25);


        runTime = frameCount - startFrame;
        //starting wave transition
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

        } else {  //finish transition

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
            if (runTime < 600) {
                //bg img
                imageMode(CORNER);
                image(bg, 0, 0);
                imageMode(CENTER);
                //wave
                stroke(wave1Color1);
                point(waveX1[i], waveY1[i]);
                stroke(wave2Color1);
                point(waveX2[i], waveY2[i]);
                stroke(wave3Color1);
                point(waveX3[i], waveY3[i]);
                stroke(wave4Color1);
                point(waveX4[i], waveY4[i]);
            } else if (runTime < 700) {
                stroke(lerpColor(wave1Color1, wave1Color2, (runTime - 599) / 100));
                point(waveX1[i], waveY1[i]);
                stroke(lerpColor(wave2Color1, wave2Color2, (runTime - 599) / 100));
                point(waveX2[i], waveY2[i]);
                stroke(lerpColor(wave3Color1, wave3Color2, (runTime - 599) / 100));
                point(waveX3[i], waveY3[i]);
                stroke(lerpColor(wave4Color1, wave4Color2, (runTime - 599) / 100));
                point(waveX4[i], waveY4[i]);
            } else if (runTime < 1300) {
                imageMode(CORNER);
                image(bg, -1280, 0);
                imageMode(CENTER);
                stroke(wave1Color2);
                point(waveX1[i], waveY1[i]);
                stroke(wave2Color2);
                point(waveX2[i], waveY2[i]);
                stroke(wave3Color2);
                point(waveX3[i], waveY3[i]);
                stroke(wave4Color2);
                point(waveX4[i], waveY4[i]);
            } else if (runTime < 1400) {
                stroke(lerpColor(wave1Color2, wave1Color3, (runTime - 1299) / 100));
                point(waveX1[i], waveY1[i]);
                stroke(lerpColor(wave2Color2, wave2Color3, (runTime - 1299) / 100));
                point(waveX2[i], waveY2[i]);
                stroke(lerpColor(wave3Color2, wave3Color3, (runTime - 1299) / 100));
                point(waveX3[i], waveY3[i]);
                stroke(lerpColor(wave4Color2, wave4Color3, (runTime - 1299) / 100));
                point(waveX4[i], waveY4[i]);
            } else if (runTime < 2000) {
                imageMode(CORNER);
                image(bg, -2560, 0);
                imageMode(CENTER);
                stroke(wave1Color3);
                point(waveX1[i], waveY1[i]);
                stroke(wave2Color3);
                point(waveX2[i], waveY2[i]);
                stroke(wave3Color3);
                point(waveX3[i], waveY3[i]);
                stroke(wave4Color3);
                point(waveX4[i], waveY4[i]);
            }
        }

        //calculate cue time and draw icons
        for (let i = 0; i < xPos.length; i++) {
            if (yPos[i] <= fixY4) {
                cueTime[i] = map(xPos[i], 0, windowWidth, 0, 599);
            } else if (yPos[i] <= fixY8) {
                cueTime[i] = map(xPos[i], 0, windowWidth, 700, 1299);
            } else {
                cueTime[i] = map(xPos[i], 0, windowWidth, 1400, 1999);
            }

            console.log(runTime);

            if (abs(cueTime[i] - runTime) <= 60) {
                cued = true;
            }
            if (cued) {
                if (cueTime[i] - runTime > 0) {
                    opa = round(map(cueTime[i] - runTime, 60, 0, 0, 255));
                    tint(255, opa);
                }
                if (yPos[i] == fixY1) {
                    image(bird1, xPos[i], fixY1);
                }
                if (yPos[i] == fixY2) {
                    image(bird2, xPos[i], fixY2);
                }
                if (yPos[i] == fixY3) {
                    image(bird3, xPos[i], fixY3);
                }
                if (yPos[i] == fixY4) {
                    image(bird4, xPos[i], fixY4);
                }
                if (yPos[i] == fixY5) {
                    image(city1, xPos[i], fixY1);
                }
                if (yPos[i] == fixY6) {
                    image(city2, xPos[i], fixY2);
                }
                if (yPos[i] == fixY7) {
                    image(city3, xPos[i], fixY3);
                }
                if (yPos[i] == fixY8) {
                    image(city4, xPos[i], fixY4);
                }
                if (yPos[i] == fixY9) {
                    image(ocean1, xPos[i], fixY1);
                }
                if (yPos[i] == fixY10) {
                    image(ocean2, xPos[i], fixY2);
                }
                if (yPos[i] == fixY11) {
                    image(ocean3, xPos[i], fixY3);
                }
                if (yPos[i] == fixY12) {
                    image(ocean4, xPos[i], fixY4);
                }
                if (frameCount - cueTime[i] > 45) {
                    cued = false;
                }
            }
        }
    }
}

function touchMoved() {

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

            //bird
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
            //city
            if (mouseY > fixY5 - 50 && mouseY < fixY5 + 50) {
                placed = true;
                landOn5 = true;
            } else if (mouseY > fixY6 - 50 && mouseY < fixY6 + 50) {
                placed = true;
                landOn6 = true;
            } else if (mouseY > fixY7 - 50 && mouseY < fixY7 + 50) {
                placed = true;
                landOn7 = true;
            } else if (mouseY > fixY8 - 50 && mouseY < fixY8 + 50) {
                placed = true;
                landOn8 = true;
            }
            //beach
            if (mouseY > fixY9 - 50 && mouseY < fixY9 + 50) {
                placed = true;
                landOn9 = true;
            } else if (mouseY > fixY10 - 50 && mouseY < fixY10 + 50) {
                placed = true;
                landOn10 = true;
            } else if (mouseY > fixY11 - 50 && mouseY < fixY11 + 50) {
                placed = true;
                landOn11 = true;
            } else if (mouseY > fixY12 - 50 && mouseY < fixY12 + 50) {
                placed = true;
                landOn12 = true;
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
                } else if (landOn5) {
                    yPos.push(fixY5);
                } else if (landOn6) {
                    yPos.push(fixY6);
                } else if (landOn7) {
                    yPos.push(fixY7);
                } else if (landOn8) {
                    yPos.push(fixY8);
                } else if (landOn9) {
                    yPos.push(fixY9);
                } else if (landOn10) {
                    yPos.push(fixY10);
                } else if (landOn11) {
                    yPos.push(fixY11);
                } else if (landOn12) {
                    yPos.push(fixY12);
                }
                placed = false;
                landOn1 = false;
                landOn2 = false;
                landOn3 = false;
                landOn4 = false;
                landOn5 = false;
                landOn6 = false;
                landOn7 = false;
                landOn8 = false;
                landOn9 = false;
                landOn10 = false;
                landOn11 = false;
                landOn12 = false;
            }

        }
        console.log(xPos);
        console.log(yPos);
        add = true;
    }
    //return false;
}


