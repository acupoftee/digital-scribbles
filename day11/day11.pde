final int lines = 20;

void setup() {
  size(640, 640);
  noFill();
  strokeWeight(4);
  colorMode(HSB, 1);
}

void draw() {
  background(0);
  for (int i = 0; i < lines; i++) {
    float j = abs(sin(frameCount/20.0f + (i/lines * PI)) * TWO_PI);
    stroke((i/(float)lines), 1, 1);
    arc(width/2, height/2, i*14, i*14, -j/2, j/2);
  }
}