// OBJETOS

var sacha = {
  nombre: 'Sacha',
  apellidos: 'Lifszyc',
  edad: 28
};

var dario = {
  nombre: 'Dario',
  apellidos: 'Susnisky',
  edad: 27
}

function upperOne({ nombre }){
  console.log(nombre.toUpperCase());
}

upperOne(sacha);

function upperTwo(persona){
  //  var nombre = persona.nombre;
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

upperTwo(dario);
upperTwo({nombre: 'aomine'});

function saludo(persona){
  var { nombre } = persona;
  var { edad } = persona;
  console.log('Hola, me llamo ' + nombre +' y tengo ' + edad  + ' años');
}

 // Parametros como referencia
function cumpleaños(persona){
  return {
      ...persona,
      edad: persona.edad + 1
  }
}

var sachaMasViejo = cumpleaños(sacha);
console.log(sachaMasViejo);
console.log(sacha);