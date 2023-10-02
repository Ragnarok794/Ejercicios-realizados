// Usa un for para remplazar todas las comidas que no sean veganas con las frutas
// del array de frutas. Recuerda no usar frutas duplicadas. Finalmente,
// imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
{ name: "Heura", isVegan: true },
{ name: "Salmon", isVegan: false },
{ name: "Tofu", isVegan: true },
{ name: "Burger", isVegan: false },
{ name: "Rice", isVegan: true },
{ name: "Pasta", isVegan: true },
];

function SheduleHealthy(foods){
    const Healthy = []
    let f = 0
 for (let i = 0 ; i< foods.length; i++){
    if(foods[i].isVegan == true){Healthy.push(foods[i].name)}
    else{Healthy.push(fruits[f]); f++}
 }
    return Healthy

}
console.log(SheduleHealthy(foodSchedule))