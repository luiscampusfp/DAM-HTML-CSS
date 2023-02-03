console.log("Hola1");

//alert("Hola2");
let y = 12;
var z = "123";
if (y == z || y < 200) {
    var x = "Hola";
    console.log("Si entro");
} else {
    console.log("No entro");
}

console.log(x);
console.log(y);
//OPERADORES MATEMATICOS
/*
++
--
+=
-=
*=
/=
*/

y++;
y += 5;
y = y + 5;

let num1 = 123.567345
console.log(num1.toFixed(2));
console.log(num1);
var lista = [123, "hola", true];


for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

while (y < 200) {
    console.log(y);
    y += y;
}
let numeros = [];
console.log("------------------------");
for (let i = 0; i < 20; i++) {
    numeros[i] = Math.floor(Math.random() * 80) + 20;
    console.log(numeros[i]);
}

let sum = 0
for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
}
console.log(sum);

let cont = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 50) {
        cont++;
    }
}
console.log(cont);

function crearAleatorios(n) {
    let numeros = [];
    for (let i = 0; i < n; i++) {
        numeros[i] = Math.floor(Math.random() * 80) + 20;
    }
    return numeros;
}
console.log("----------------------");
let numes = crearAleatorios(45);
console.log(numes);

document.getElementById("subtitulo").innerText = "Hola";
document.getElementsByClassName("navegacion")[2].innerHTML = "<a href='https://es.wikipedia.org/wiki/Wikipedia:Portada'>Hola</a>";
/*let elementos =document.getElementsByClassName("navegacion");
for (let i = 0; i < elementos.length; i++) {
    elementos[i].innerText="asd";   
}*/

function Evento() {
    alert("Hemos detonado un evento");
}