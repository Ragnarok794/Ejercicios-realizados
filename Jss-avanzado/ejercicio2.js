// Dado el siguiente javascript usa forof y forin para hacer la media del
// volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
{
name: "Alberto",
favoritesSounds: {
waves: { format: "mp3", volume: 50 },
rain: { format: "ogg", volume: 60 },
firecamp: { format: "mp3", volume: 80 },
},
},
{
name: "Antonio",
favoritesSounds: {
waves: { format: "mp3", volume: 30 },
shower: { format: "ogg", volume: 55 },
train: { format: "mp3", volume: 60 },
},
},
{
name: "Pedro",
favoritesSounds: {
shower: { format: "mp3", volume: 50 },
train: { format: "ogg", volume: 60 },
firecamp: { format: "mp3", volume: 80 },
},
},
{
 name: "Cristina",
    favoritesSounds: {
    waves: { format: "mp3", volume: 67 },
    wind: { format: "ogg", volume: 35 },
    firecamp: { format: "mp3", volume: 60 },
    },
    },
    ];
    




function volume(users){
    let volumeTotal = 0
    let count = 0
for (let user of users){
for ( let sound in user.favoritesSounds){
        volumeTotal += user.favoritesSounds[sound].volume
        count ++
}}
console.log(volumeTotal)
console.log(count)
return merdiaVolume = volumeTotal / count;
}

console.log(volume(users))



const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
 
    console.log(key + ": " + person[key]);
  }
