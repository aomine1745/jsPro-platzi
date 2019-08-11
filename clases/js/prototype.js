function heredaDe(pHijo, pPadre){
  var noop = function() {}
  noop.prototype = pPadre.prototype
  pHijo.prototype = new noop
  pHijo.prototype.constructor = pHijo
}

function Persona(nombre, apellido, edad, altura, sexo){
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.altura = altura
  this.sexo = sexo
}

const alturaMedia = 1.8

Persona.prototype.saludar = function() {
  let sexo = this.sexo === 'm' ? 'alto' : 'alta'
  let alturaMessage = this.altura >= alturaMedia ? `soy ${sexo} :D` : `no soy ${sexo} :(`
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}, tengo ${this.edad} años y ${alturaMessage}`)
}

Persona.prototype.soyAlto = function() {
  return this.altura >= alturaMedia
}

function Desarrollador(nombre, apellido, edad, altura, sexo) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.altura = altura
  this.sexo = sexo
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
  console.log('Gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
}


// var sacha = new Persona('Sacha', 'Lifszyc', 24, 1.84, 'm')
// sacha.saludar()
// var erika = new Persona('Erika', 'Luna', 18, 1.81, 'f')
// erika.saludar()
// var arturo = new Persona('Arturo', 'Martinez', 20, 1.69, 'm')
// arturo.saludar()