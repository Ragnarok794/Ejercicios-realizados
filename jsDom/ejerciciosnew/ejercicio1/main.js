// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums.
const albums = [
"De Mysteriis Dom Sathanas",
"Reign of Blood",
"Ride the Lightning",
"Painkiller",
"Iron Fist",
];

const list = document.createElement('ul')
document.body.appendChild(list)

for (album of albums){
    list.innerHTML += `<li>${album}</li>`
}
