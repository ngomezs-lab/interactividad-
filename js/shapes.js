let bg_color = "black";
const PALETTE = ["red", "green", "blue", "pink"];
let x = 0, y = 0;
const RECT_SIZE = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(60);
  //bg_color = color(random(255), random(255), random(255));
  bg_color = random(PALETTE);
  //bg_color = PALETTE[0];
  x = random(width);
  y = random(height);
}

function draw() {
  background(bg_color);
  fill(PALETTE[1]);
  stroke(PALETTE[2]);
  // rect(x, y, width, height);
  rect(x, y, RECT_SIZE, RECT_SIZE);
    x += 1;
    // if se ejecuta cuando se cumple una condición
  if (x > width){
    x= -RECT_SIZE;

  }  
  // ellipse(x, y, width, height);
  //ellipse(200,200,100,100);
  // triangle (x1, y1, x2, y2, x3, y3);
  //triangle(300,300,400,300,400,400);
}
function mousePressed(){
  //console.log("Mouse pressed");
  //console.log(mousex, mousey);
  bg_color = random(PALETTE);
}