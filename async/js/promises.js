const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = 'people/:id'

function getPersonaje(id){
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(id)
    resolve(data)
  })
  .catch(() => reject(id))
  })
}

function onError(id){
  console.log(`sucedio un error no se pudo obtener el personaje ${id}`)
}

// En serie
// getPersonaje(1)
// .then((res) => {
//   console.log(`Hola, yo soy ${res.name}`)
//   return getPersonaje(3)
// })
// .then((res) => {
//   console.log(`Hola, yo soy ${res.name}`)
//   return getPersonaje(4)
// })
// .then((res) => {
//   console.log(`Hola, yo soy ${res.name}`)
//   return getPersonaje(5)
// })
// .then((res) => {
//   console.log(`Hola, yo soy ${res.name}`)
//   return getPersonaje(6)
// })
// .then((res) => {
//   console.log(`Hola, yo soy ${res.name}`)
//   return getPersonaje(7)
// })
// .then((res) => {
//   console.log(`Hola, yo soy ${res.name}`)
//   return getPersonaje(8)
// })
// .then((res) => {
//   console.log(`Hola, yo soy ${res.name}`)
// })
// .catch(onError)

// En paralelo
var ids = [1, 3, 4, 5, 6, 7, 8]

// var promises = ids.map(function(id){
//   return obtenerPersonaje(id)
// })

var promises = ids.map(id => getPersonaje(id))

Promise
.all(promises)
.then(personajes => console.log(personajes))
.catch(onError)