let color= "black";
let stroke_weight = 10;
let coordinates = [];
function setup(){
    createCanvas(windowWidth, windowHeight);
}
function draw(){
background(255);
stroke(color);
stroke_weight(stroke_weight);
fill(0);
//colsole.log(coordinates);
beginShape();

for (let i= 0; i < coordinates.length; i++){
    let coord = coordinates [i];
    vertex(coord.x, coord.y);
}
endShape();
}
function mousePressed(){
   coordinates.push({ x: mouseX, y: mouseY});
}

function mouseDragged(){
   coordinates.push({ x: mouseX, y: mouseY});
}