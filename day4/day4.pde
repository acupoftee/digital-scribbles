ArrayList<Line> lines = new ArrayList<Line>();
int lineWidth = 10;

void setup() {
  size(780, 780);
  for (int i = 0; i < width; i += lineWidth+lineWidth/2) {
    lines.add(new Line(new PVector(i, height/2), new PVector(i, height/2)));
  }
}

void draw() {
  background(255, 255, 255);
  
  // draw lines in list
  for (Line l : lines) {
    l.drawLine();
    l.update();
  }
}


class Line {
  PVector basePos;
  PVector pos;
  
  int maxLineHeight = int(random(10, 100));
  float lineSpeed = random(1, 4);
  int startX = 10;
  
  // lines are straight lol
  float angle = 0;
  
  // lines will be different shades of yellow
  int r = int(random(255, 255));
  int g = int(random(180, 255));
  int b = int(random(0, 100));
  
  Line(PVector basePos_, PVector pos_) {
    basePos = basePos_;
    pos = pos_;
  }
  
  void drawLine() {
    stroke(r, g, b);
    strokeWeight(lineWidth);
    line(basePos.x, basePos.y, pos.x, pos.y);
  }
  
  void update() {
    angle += lineSpeed;
    float wave = abs(cos(radians(angle))*maxLineHeight);
    if (basePos.y <= 0) {
      pos.y = wave;
    } else if (basePos.y >= height) {
      pos.y = height - wave;
    } else {
      basePos.y = (height/2)-wave; 
      pos.y = (height/2)+wave;
    }
  }
}