var colors;
var backdrop;

function setup() {
    createCanvas(windowWidth, windowHeight);

    colors = [
        color(255, 0, 0), // red
        color(0, 255, 0), // green
        color(0, 0, 255), // blue
    ];

    backdrop = 0;
}

function draw() {
    blendMode(BLEND); // default blending mode

    if (backdrop == 0) {
        background(255);
        blendMode(EXCLUSION); // takes the difference of the underlying colros
    } else {
        background(0);
        blendMode(SCREEN); // uses the inverse of colors
    }
    noFill(); // draw outline only
    strokeWeight(30);
    for (var i = 0; i < 3; i++) {
        stroke(colors[i]);
        beginShape();
        for (var w = -25; w < width + 25; w += 5) {
            var h = height / 2;
            h += 200 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.01 + frameCount * 0.02)), 5);
            curveVertex(w, h); 
        }
        endShape();
    }
}

function mousePressed() {
    if (backdrop == 0) {
        backdrop = 1;
    } else {
        backdrop = 0;
    }
}