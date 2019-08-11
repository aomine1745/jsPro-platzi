// ARRAYS

var sacha = {
  nombre: 'Sacha',
  apellidos: 'Lifszyc',
  edad: 28,
  altura: 1.90,
  cantidadDeLibros: 28
};

var alan = {
  nombre: 'Alan',
  apellidos: 'Raton',
  edad: 45,
  altura: 1.76,
  cantidadDeLibros: 45
};

var martin = {
  nombre: 'Martin',
  apellidos: 'Torres',
  edad: 34,
  altura: 1.68,
  cantidadDeLibros: 125
};

var dario = {
  nombre: 'Dario',
  apellidos: 'Susnisky',
  edad: 27,
  altura: 1.84,
  cantidadDeLibros: 84
};

var vicky = {
  nombre: 'Vicky',
  apellidos: 'Zapata',
  edad: 26,
  altura: 1.56,
  cantidadDeLibros: 33
};

var paula = {
  nombre: 'Paula',
  apellidos: 'Barrios',
  edad: 27,
  altura: 1.76,
  cantidadDeLibros: 71
};

var personas = [sacha, alan, martin, dario, vicky, paula];

// FILTRAR ARRAYS
console.log('Personas Altas');
var personasAltas = personas.filter(esAlta);

function esAlta({ altura }){
  return altura >= 1.80;
}

for(let e of personasAltas){
  console.log(e.altura);
}

 // RETO
 console.log('Personas Bajas');
const esBaja = ({ altura }) => altura < 1.80;

var personasBajas = personas.filter(esBaja);

personasBajas.forEach(e => {
  console.log(e.altura);
});

// Transformar un array
console.log('Metros to Centimetros')
const mToCm = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCm = personas.map(mToCm)
personasCm.forEach(e => {
console.log(e.altura)
});

// Reducir un array a un valor
console.log('Cantidad de libros en total')

const reducer = (acum, { cantidadDeLibros }) =>  acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer);
console.log(`El total de libros es ${totalDeLibros}`)