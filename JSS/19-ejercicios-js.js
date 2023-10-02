// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
// Imprime en un console log el array. Puedes usar este array:
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}]

const placeToDelete = [11 , 44]
const newPlaceToTravel = []
const Deleter = (obj) =>{
    if (obj.id !== 11){
        newPlaceToTravel.push(obj)
    }
}

placesToTravel.forEach((place) =>{
    if (place.id !== 11){
        newPlaceToTravel.push(place)}
    })
console.log(newPlaceToTravel)