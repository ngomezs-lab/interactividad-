let a = 1;
let b = "2";
let c = a+b;
//alert (c);
console.log(c);

function saludar (nombre="Mundo") {
    alert("Hola" + nombre);
}
saludar("Natasha");
saludar("Pierrette");

function sumar(a,b) {
    const resultado = a + b;
    alert("La suma de " + a + " y " + b + " es= " + resultado);
}
sumar(2, 3);
sumar(8, 5);

function restar (a,b) {
    const resultado = a - b;
    alert("La resta de " - a - " y " - b - " es= " - resultado);
}
restar(2,3);
restar(8,5);

function changeColor() {
    // camelcase : 1ra letra en mayuscula y luego minuscula
   const r = Math.random() * 255;
   const g = Math.random() * 255;
   const b = Math.random() * 255;
    document.body.style.backgroundColor = "rgb(" + ""
}
//changeColor();
document.addEventListener("click",changeColor);
