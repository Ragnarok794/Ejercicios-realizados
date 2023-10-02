// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const newElementEx1 = document.createElement('div')
document.body.appendChild(newElementEx1)
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newElementEx2 = document.createElement('div')
const newP2 = document.createElement('p')
document.body.appendChild(newElementEx2)
newElementEx2.appendChild(newP2)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// loop con javascript.
const newElementEx3 = document.createElement('div')
document.body.appendChild(newElementEx3)

for (let i = 0 ; i < 6; i++){
    const newP3 = document.createElement('p')
    newElementEx3.appendChild(newP3)
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el
// texto 'Soy dinámico!'.

const newElementEx4 = document.createElement('div')
const newP4 = document.createElement('p')
document.body.appendChild(newElementEx4)
newElementEx4.appendChild(newP4)
newP4.innerText = "Soy dinamico!"

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here')
h2.innerText =  'Wubba Lubba dub dub'

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const List = document.createElement('ul')
document.body.appendChild(List)
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

for (i = 0;i< apps.length; i++){
    const app = apps[i]
    const li = document.createElement('li')
    li.innerText = app
    List.appendChild(li)

}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const toRemove = document.querySelectorAll('.fn-remove-me')

if (toRemove.length> 0) {
      toRemove.forEach(element => {element.remove()})
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.
const firstDiv = document.querySelector('div')


firstDiv.insertAdjacentHTML('afterend','<p>Voy en medio</p>')

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// .fn-insert-here

const toInsert = document.querySelectorAll('.fn-insert-here')

if(toInsert.length > 0){
    toInsert.forEach(element => {
        element.insertAdjacentHTML('afterbegin','<p>Voy dentro</p>')
    });
}