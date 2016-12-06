function setup() {
  createCanvas(640 * 2.2, 360 * 2.4);  
}

function draw() {
  background(51);
  drawCircle(width/2, height/2, 400);
  frameRate(4);
  // noLoop();
}

function drawCircle(x, y, radius) {
  var R = Math.random() * 180;
  var G = Math.random() * 255;
  var B = Math.random() * 255;

  noFill();
  stroke(R, G, B)
  ellipse(x, y, radius, radius);
  radius -= 0.5;
  if (radius > 8) {
    //radius -= 1;
    // Four circles! left right, up and down
    drawCircle(x + radius/2, y + radius/3, radius/2);
    drawCircle(x - radius/2, y - radius, radius/2);
    drawCircle(x, y + radius/2, radius/4);
    drawCircle(x, y - radius/2, radius/4);
  }
}
