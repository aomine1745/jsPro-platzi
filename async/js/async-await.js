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

async function obtenerPersonajes(){
var ids = [1, 3, 4, 5, 6, 7, 8]

  var promises = ids.map(id => getPersonaje(id))
  try {
    var personajes = await Promise.all(promises)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()