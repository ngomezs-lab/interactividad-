let x= 0, y= 0;
let stroke_color = "black";
let stroke_weight = 1;
let fill_color = "white";
let size = 42;


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(24);
}
function draw(){
    background(0,50);
    updateColor();
    //ellipse (x, y, width, height)
    stroke (stroke_color);
    strokeWeight (stroke_weight);
    fill(fill_color);
    ellipse(mouseX, mouseY, size, size);
}

function updateColor(){
    //map ( value, start, end, targetStart, targetEnd)
    fill_color = map(mouseX, 0, width, 255, 0);
    stroke_color = map(mouseX, 0, width, 0, 255);
    stroke_weight =map(mouseX, 0, width, 1, 10)

}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(0);

}