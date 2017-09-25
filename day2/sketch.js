function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(4);
    stroke(250);
    rectMode(CENTER);
}

function draw() {
    background(250); // of each rectangle, not the canvas
    translate(width/2, height/2);
    for (var i = -6; i <= 5; i++) { 
        var x = i * 30;
        var y = 0;
        fill(map(i, -6, 5, 0, 255), 55, 160); // fills rectangle with interpolated colors
        push(); // saves current state of drawing
        translate(x, y); // stores coordinates
        rotate(radians(tan(radians(i+frameCount))+frameCount));
        rect(0, 0, 20, 100, 6); 
        pop();
    }
}