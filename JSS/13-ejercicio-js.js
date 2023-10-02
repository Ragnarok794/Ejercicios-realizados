// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que
// existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
    ];
function removeDuplicates(param){
    const withoutDuplicates = [];

    for(let i = 0; i< param.length; i++){
        if(!withoutDuplicates.includes(param[i])){
            withoutDuplicates.push(param[i]);
        }
    }
    return withoutDuplicates;
}
       
        const withoutDuplicates = removeDuplicates(duplicates)
console.log('La lista sin duplicados es la siguiente:', withoutDuplicates);