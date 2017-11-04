var cellsize = 10;
var gridsize = 10;
var size = 0;
var count = 5;
var snakes = [];
var padding = 30;
var border = 50;

function setup() {
  background(40);
  //colorMode(HSB, 360, 100, 100, 100);
  colorMode(RGB);
  size = gridsize * cellsize;
  createCanvas((size * count) + ((count - 1) * padding) + border * 2, (size * count) + ((count - 1) * padding) + border * 2);
  noFill();
  strokeWeight(cellsize / 2);
  strokeCap(ROUND);
  frameRate(15);
  
  for (var y = 0; y < count; y++) {
    for (var x = 0; x < count; x++) {
      for (var i = 0; i < 3; i++) {
        snakes.push(new Snake(x * size + x * padding + border, y * size + y * padding + border));   
      }
    }
  }
}

function draw() {
  noStroke();
  fill(20, 0, 30);
  rect(0, 0, width, height, 30);
  
  for (var i = 0; i < snakes.length; i++) {
    snakes[i].update();
    snakes[i].draw();
    if (snakes[i].dead) {
      snakes[i] = new Snake(snakes[i].x, snakes[i].y);
    } 
  }
}

function Snake(x, y) {
  this.x = x;
  this.y = y;
  this.dead = false;
  
  var segmentCount = random(2, 10);
  var segments = [];
  var dir = p5.Vector.fromAngle(floor(random(4)) * (TWO_PI / 4)).mult(cellsize);
  var position = createVector(Math.ceil(random(size) / cellsize) * cellsize, Math.ceil(random(size) / cellsize) * cellsize);
  var newPosition = createVector(0, 0);
  var frames = 0;
  
  segments.push(position);
  
  this.update = function() {
    if (random() < 0.3)  {
      frames = 0;
      var rotation = 0;
      while (rotation == 0) {
        rotation = round(random(-1, 1));
      }
      dir.rotate(TWO_PI / 4 * rotation);
    }
    
    // move snake
    newPosition = p5.Vector.add(position, dir);
    segments.unshift(newPosition);
    position = newPosition;
    if (segments.length > segmentCount) {
      segments.pop();
    }
  };
  
  var c = color(random(250), random(10, 70), 200);
  this.draw = function() {
    stroke(c);
    this.dead = true;
    
    for (var i = 0; i < segments.length - 1; i++) {
      var s = segments[i];
      var e = segments[i + 1];
      
      if (s.x >= 0 && s.x <= size && s.y >= 0 && s.y <= size) {
        if (e.x >= 0 && e.x <= size && e.y >= 0 && e.y <= size) {
          // first corner
          line(s.x + this.x, s.y + this.y, e.x + this.x, e.y + this.y);
          line(s.y + this.x, s.x + this.y, e.y + this.x, e.x + this.y);
          
          // second corner
          line(size - s.x + this.x, s.y + this.y, size - e.x + this.x, e.y + this.y);
          line(size - s.y + this.x, s.x + this.y, size - e.y + this.x, e.x + this.y);
          
          // third corner
          line(s.x + this.x, size - s.y + this.y, e.x + this.x, size - e.y + this.y);
          line(s.y + this.x, size - s.x + this.y, e.y + this.x, size - e.x + this.y);
          
          // fourth corner
          line(size - s.x + this.x, size - s.y + this.y, size - e.x + this.x, size - e.y + this.y);
          line(size - s.y + this.x, size - s.x + this.y, size - e.y + this.x, size - e.x + this.y);
          
          this.dead = false;
        }
      }
    }
      frames++;
      stroke(0, 0, 200);
      noFill();
      rect(this.x, this.y, size, size, 5, 5, 5, 5);
    };
  }    