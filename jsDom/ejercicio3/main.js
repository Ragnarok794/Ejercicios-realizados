// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listaPaises = document.createElement('ul');
document.body.appendChild(listaPaises)

if (countries.length >0){
     countries.forEach(country => {
        const toLi = document.createElement('li')
        toLi.innerHTML = country 
        listaPaises.appendChild(toLi)
    }) 

}
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const toRemove = document.querySelector('.fn-remove-me')
console.log(toRemove)
toRemove.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const toPrint = document.querySelector('[data-function="printHere"]')
const toUl = document.createElement('ul')
toPrint.appendChild(toUl )

if (cars.length >0){
    cars.forEach(car => {
       const toLi = document.createElement('li')
       toLi.innerHTML = car 
       toUl.appendChild(toLi)
   }) }

//    1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//    h4 para el titulo y otro elemento img para la imagen.
   const countries2 = [
   {title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'},
   {title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
   {title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
   {title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
   {title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

 

   const divTemplate = (title, image) => {
    return  `<div class="template">
      <h4>${title}</h4>
      <img src="${image}" alt="404 not found"/>

    </div>`
   }
   const renderCountries = () =>{
    // for(let i = countries2.length -1;i >=0 ; i-- ){
    //         const country = countries2[i]
        for(country of countries2){
           const template = divTemplate(country.title, country.imgUrl)
            document.body.insertAdjacentHTML('beforebegin', template)
        }
    }
    renderCountries()
  
//    1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const button = document.createElement('button')
button.className = 'ButtonRemoveLast'
button.innerText = 'Eliminar ultima foto'
document.body.insertAdjacentElement("afterbegin", button)

// let divsCountries = document.querySelectorAll('.template')

// const divToRemove = divsCountries[countries2.length-1] Esta es una manera de borrar la ultima foto, pero no borra mas

// const handle = () =>{
// divToRemove.remove()}

// button.addEventListener('click', handle)

// voy a crear un metodo para que borre la ultima foto siempre que haga click hasta que no quede ninguna

const handle = () =>{
    const divsCountries = document.querySelectorAll('.template')

    if(divsCountries.length > 0){
    divsCountries[divsCountries.length -1].remove()
  
        }}
    
    button.addEventListener('click', handle) 
   
    // 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
    // divs que elimine ese mismo elemento del html.

const divsTemplates = document.querySelectorAll('.template')

for (div of divsTemplates){
const buttonForImg = document.createElement('button')
buttonForImg.className = 'ButtonRemoveImg'
buttonForImg.innerText = 'Eliminar esta foto'
div.appendChild( buttonForImg)}

const buttonsRemove = document.querySelectorAll('.ButtonRemoveImg')

buttonsRemove.forEach(buttonRemove =>{
    buttonRemove.addEventListener('click',function(){
        const divpadre = buttonRemove.parentElement;
        divpadre.remove()
    })
})
  
