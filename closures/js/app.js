function crearSaludo(finalDeFrase){
  return function(nombre) {
    console.log(`Hola ${nombre} ${finalDeFrase}`)
  }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('parsero')
const saludoPeruca = crearSaludo('Gaaaaaaaaa')

saludoArgentino('Sacha') // Hola sacha che
saludoMexicano('Sacha') // Hola sacha wey
saludoColombiano('Sacha')  // Hola sacha parsero
saludoPeruca('Sacha')  // Hola sacha Gaaaaaaaaa
