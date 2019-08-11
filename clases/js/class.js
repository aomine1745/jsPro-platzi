const alturaMedia = 1.8

class Persona {
  constructor(nombre, apellido, edad, altura, sexo){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
    this.sexo = sexo
  }

  saludar(fn) {
    let { nombre, apellido, edad, sexo } = this
    let sexoMessage = sexo === 'm' ? 'alto' : 'alta'
    let alturaMessage = this.soyAlto() ? `soy ${sexoMessage} :D` : `no soy ${sexoMessage} :(`
    console.log(`Hola me llamo ${nombre} ${apellido}, tengo ${edad} años y ${alturaMessage}`)
    if(fn) {
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    return this.altura >= alturaMedia
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, edad, altura, sexo) {
    super(nombre, apellido, edad, altura, sexo)
  }

  saludar(fn) {
    // let nombre = this.nombre
    // let apellido = this.apellido
    let { nombre, apellido } = this
    let alturaMessage = this.soyAlto() ? `soy jirafon` : `soy chato`
    console.log(`${nombre} ${apellido} Gaaaaaaaaaaaaaaaa y ${alturaMessage} Gaaaaaaaaaaa`)
    if(fn) {
      fn(nombre, apellido, true)
    }
  }
}

var sacha = new Persona('Sacha', 'Lifszyc', 24, 1.84, 'm')
sacha.saludar(responderSaludo)
var erika = new Persona('Erika', 'Luna', 18, 1.81, 'f')
erika.saludar(responderSaludo)
var arturo = new Persona('Arturo', 'Martinez', 20, 1.69, 'm')
arturo.saludar()
var chupetin = new Desarrollador('Chupetin', 'Trujillo', 69, 1.9, 'g');
chupetin.saludar(responderSaludo);

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen dia ${nombre} ${apellido}`)
  if(esDev) {
    console.log('A mira no sabia que eras de la beba army :v')
  }
}

