void setup() {
  size(640, 640);
  noStroke();
  fill(#f60a20, 200);
  background(0);
}


void draw() {
  background(#262526);
  translate(width/2, height/2);
  for (float angle = -90; angle < 90; angle += 0.5) {
    for (float q = 1; q < 2; q += 0.2) {
      float a = q*180;
      float t = angle+frameCount*1.5+a;
      float x = 16*pow(sin(radians(t)), 3);
      float y = -13*cos(radians(t)) + 5*cos(radians(2*t)) + 2*cos(radians(3*t)) + cos(radians(4*t));
      float s = cos(radians(angle))*q*7;
      ellipse(x*q*8, y*q*8, s, s);
    }
  }
}