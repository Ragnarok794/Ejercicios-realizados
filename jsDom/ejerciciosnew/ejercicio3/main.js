// Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente
// una lista ul > li de elementos en el div de html con el atributo
// data-function="printHere".
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const list = document.createElement('ul')
document.body.appendChild(list)
for(n of places){
    list.innerHTML += `<li data-function="printHere">${n}</li>`
}