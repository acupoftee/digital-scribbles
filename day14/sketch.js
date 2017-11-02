var xOffset = 0;
var yOffset = 0;
var offsetIncrement = 0.006;
var increment = 1;
var s = 1;
var m = 1.005;
var isClicked = false;

function setup() {
  createCanvas(640, 640);
  background(255);
  blendMode(BLEND);
  noFill();
  stroke(200, 8, 64, 10);
}

function draw() {
  translate(width/2, height/2);
  if (s < 300) {
    for (var times = 0; times < 10; times++) {
      npoints = int(2 * PI * s);
      npoints = min(npoints, 500);
      
      beginShape();
      for (var i = 0; i < npoints; i++) {
        var angle = i / npoints * TWO_PI;
        var p = p5.Vector.fromAngle(i / npoints * TWO_PI);
        var n = noise(xOffset + p.x * increment, yOffset + p.y * increment) * s;
        p.mult(n);
        vertex(p.x, p.y);
      }
      endShape(CLOSE);
      
      xOffset += offsetIncrement;
      yOffset += offsetIncrement;
      
      s *= m;
    } 
  } else {
      noLoop();
   }
  
 }