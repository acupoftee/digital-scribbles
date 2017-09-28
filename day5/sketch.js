var nPoints = 300; // number of points making up a ring
var startColor;

function setup() {
    createCanvas(1366, 600);
    background(255);

    // since this'll sketch rings
    noFill();
    
    // determines random starting point for the first ring
    noiseSeed(random(100));
    startColor = random(255);
}

function draw() {
    beginShape();
    var startX, startY;
    for (var i = 0; i < nPoints; i++) {
        // angle from center to the edge of the shape
        var angle = map(i, 0, nPoints, 0, TWO_PI);

        // cx lies on the current frame in the loop
        var centerX = frameCount * 2 - 100;  

        // because each shape is different, the center y coordinate
        // calculated by dividing the height of the shape by 2.
        // Multiplying by sine adds amplitude to the stream of rings
        var centerY = height / 2 + 50 * sin(frameCount / 60);

        var xx = 100 * cos(angle + centerX / 10); 
        var yy = 100 * sin(angle + centerX )/ 10;
        var vector = createVector(xx, yy);
        xx = (xx + centerX) / 150; yy = (yy + centerY) / 150;
        vector.mult(1 + 1.5 * noise(xx, yy));
        vertex(centerX + vector.x, centerY + vector.y);
        if (i == 0) {
            startX = centerX + vector.x;
            startY = centerY + vector.y;
        }
    }
    colorMode(HSB);
    var hue = centerX / 10 - startColor;
    if (hue < 0) {
        hue += 255;
    }
    stroke(hue, 100, 120);
    strokeWeight(0.1);
    vertex(startX, startY);
    endShape();
    if (frameCount > width + 500) {
        noLoop();
    }
}