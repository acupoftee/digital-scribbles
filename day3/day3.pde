// controls amplitude of waves
float noiseScale = 0.03f;
void setup() {
  size(1000, 300);
  background(230, 230, 210);
  smooth();
}

// controls speed of the waves
float n = 0.00f;
float d = 0.5f;
void draw() {
  n=n+d;
  background(230, 230, 210);
  
  // 40 waves
  for (int y = 0; y < 40; y++) {
    // 300 points across
    for (int x = 0; x < 300; x++) {
      float noiseVal = noise((-n+x)*noiseScale, (-n+y)*noiseScale, y*noiseScale);
      stroke((noiseVal*300), 100, (noiseVal*530));
      point(x*3.5, noiseVal*350);
    }
  }
}
