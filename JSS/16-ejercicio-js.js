// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la
// función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
 
function IncludeProducts(param){

const Casmisetaproduct = []

for (let i = 0; i < param.length; i++){
    const productword = param[i]
    if (productword.includes('Camiseta')){
        Casmisetaproduct.push(productword)}
}
        return Casmisetaproduct;
}
const ProductosCamiseta = IncludeProducts(products)
console.log(`Los prodcutos que contienen la palabra camiesta son: ${ProductosCamiseta}`)

// otra manera de resolverlo

const Products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (let i = 0; i < Products.length; i++) {
  if (Products[i].includes('Camiseta')) {
    console.log(Products[i]);
  }
}