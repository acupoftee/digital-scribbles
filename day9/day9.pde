int arcs = 7;
int sw = 20; // stroke weight
int arcOverlaps = 2;
float r; // radius
long rs; // random seed


void setup() {
  size(500, 500);
  colorMode(HSB, 360, 100, 100);
  noFill();
  rs = (long) random(10);
  strokeWeight(sw);
  strokeCap(SQUARE);
}

void draw() {
  randomSeed(rs);
  background(0);
  //background(#FFFFFF);
  for (int i = 0; i < arcOverlaps; i++) {
    drawArcs(width/2, height/2);
  }
  //if (frameCount%2==0 && frameCount<241) saveFrame("image-###.gif");
}

void drawArcs(float x, float y) {
  pushMatrix();
  translate(x, y); // position arcs in the center
  rotate(r); // draw the arcs by rotating the radius
  for (int i = 0; i < arcs; i++) {
    stroke(360.0/arcs*i, 100, 100, 140);
    // start 
    float start = random(TWO_PI);
    float end = start + random(PI/5, PI/3);
    float scal = map(sin(r+TWO_PI/ arcs*i), -1, 1, .5, 2);
    arc(0, 0, width*.8-i*3*sw, width*.8-i*3*sw, start, end*scal);
  }
  r += .0523/4;
  popMatrix();
}