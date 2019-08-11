const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = 'people/:id'

// function onPeopleResponse({ name }){
//   console.log(`Hola, yo soy ${name}`)
// }

function getPersonaje(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(id)
    // onPeopleResponse(data)

    // console.log(`Hola, yo soy ${data.name}`)
    // if(callback){
    //   callback()
    // }
    callback(data)
  })
  .catch(error => {
    console.log(`sucedio un error no se pudo obtener el personaje ${id}`)
  })
}

getPersonaje(1, function(data){
  console.log(`Hola, yo soy ${data.name}`)
  getPersonaje(3, function(data){
    console.log(`Hola, yo soy ${data.name}`)
    getPersonaje(4, function(data){
      console.log(`Hola, yo soy ${data.name}`)
      getPersonaje(5, function(data){
        console.log(`Hola, yo soy ${data.name}`)
        getPersonaje(6, function(data){
          console.log(`Hola, yo soy ${data.name}`)
          getPersonaje(7, function(data){
            console.log(`Hola, yo soy ${data.name}`)
            getPersonaje(8, function(data){
              console.log(`Hola, yo soy ${data.name}`)
            })
          })
        })
      })
    })
  })
})

