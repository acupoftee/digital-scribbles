void setup(){
  size(640, 640);
  strokeWeight(9);
  rectMode(CENTER);
}

void draw(){
	background(255);
    translate(width/2, height/2);
    for(int i = 0; i < 360; i+=10){
        float x = sin(radians(i))*150;
        float y = cos(radians(i))*150;
        pushMatrix();
        translate(x, y);
		rotate(radians(-i+frameCount));
        noStroke();
    	fill(sin(radians(i/2))*255, 255, 100);
        rect(0, 0, 120, 20, 25);    
        popMatrix();
    }
  
 	for(int i = 0; i < 360; i+=10){
        float x = sin(radians(i))*150;
        float y = cos(radians(i))*150;
        pushMatrix();
        translate(x, y);
		rotate(radians(-i+frameCount+90));
        stroke(255);
    	fill(sin(radians(i/2))*255, 255, 100);
        rect(0, 0, 120, 20, 25);    
        popMatrix();
    }
}