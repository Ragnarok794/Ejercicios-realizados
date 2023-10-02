// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for(var i = 0; i < 10; i++){
    console.log(`El valor de "i" es: ${i}`)
}

console.log(`---------------------------------------------`);

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.

for(var i = 0; i < 10; i++){
    var rest = i%2 
    if(rest === 0){
    console.log(`El valor de "i"  con resto 0 es: ${i}`)
}
}
// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a 'Dormido!'.
console.log(`------------------------------------`);
for(var i = 0; i < 10; i++){
    if(i <= 8){
        console.log(`Intentando dormir 🐑`)
    }
    if(i == 9){
        console.log(`Dormido!`);
    }
}