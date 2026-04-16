let boton1 = document.getElementById("btn-1");
let boton2 = document.getElementById("btn-2");
let boton3 = document.getElementById("btn-3");

boton1.addEventListener("click", function(){
    console.log("Boton 1");
});

boton1.addEventListener("mouseenter", function(){
    bgColor("red");
})
/**
 elemento.addEventListener("event", function(){
    accion();
 })
*/
boton1.addEventListener("mouseleave", function(){
    bgColor("pink");
})
boton1.addEventListener("mouseenter", function(){
    bgColor("white");
})
boton1.addEventListener("mouseleave", function(){
    bgColor("black");
})

boton2.addEventListener("mouseenter", mouseEnter);
boton2.addEventListener("mouseleave", mouseLeave);

function mouseEnter(){
    console.log("Mouse Enter");
    bgColor ("red");
}

function mouseLeave(){
    console.log("Mouse Leave");
    bgColor("black");
}
function bgColor(color){
    console.log("Background Color");
    document.body.style.backgroundColor = color;
}
