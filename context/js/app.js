const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc'
}

const yesika = {
  nombre: 'Yesika',
  apellido: 'Cortez'
}

function saludar(saludo = 'Hola') {
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

const saludarASacha = saludar.bind(sacha)
const saludarAYesika = saludar.bind(yesika)

saludarASacha()
saludarAYesika()

setTimeout(saludar.bind(sacha, 'Weeeee'), 1000)

saludar.call(sacha, 'Gaaaa')

saludar.apply(sacha, ['AEA Mongol'])