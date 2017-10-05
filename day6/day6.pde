private static final int N_LINES = 50;
ArrayList<ColorfulLine> lines = new ArrayList<ColorfulLine>(N_LINES);

void setup() {
  size(640, 480);
  frameRate(60f);
  background(255f);
  
  colorMode(HSB, 100f, 100f, 100f, 100f);
  
  for (int i = 0; i < N_LINES; i++) {
    lines.add(new ColorfulLine(0f, width * 0.3f, 
    (i + 0.5f) * height / N_LINES, 
    i * 100f / N_LINES));
  }
}

void draw() {
  background(100f);
  
  for (ColorfulLine l : lines) {
    l.draw();
  }
  ColorfulLine currentLine = lines.get(int(random(N_LINES)));
  currentLine.addX2(random(-width * 0.05f, width * 0.05f));
}


class ColorfulLine {
  float x1;
  float x2;
  float y;
  float hue;
  
  ColorfulLine(float x1, float x2, float y, float hue) {
    this.x1 = x1;
    this.x2 = x2;
    this.y = y;
    this.hue = hue;
  }
  
  void draw() {
    strokeWeight(1f);
    stroke(hue, 100f, 100f, 100f);
    line(x1, y, x2, y);
  }
  
  void addX2(float x) {
   x2 += x;
   constrain(x2, 0f, width);
  }
}