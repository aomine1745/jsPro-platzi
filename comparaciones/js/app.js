// COMPARACIONES

var x = 4,
y = '4';

console.log(x == y);
console.log(x === y);

console.log('-----------------------');

var aomine = {
  nombre: 'aomine'
}

var otroMen = {
  nombre: 'aomine'
}

console.log(aomine === otroMen);

console.log('-----------------------');

var otroMen = aomine;

console.log(aomine === otroMen);

console.log('-----------------------');

var otroMen = {
  ...aomine
};
console.log(otroMen);
console.log(aomine === otroMen);
otroMen.nombre = 'Pepe';
console.log(otroMen);
console.log(aomine);

console.log('-----------------------');

var otroMen = aomine;
console.log(otroMen);
otroMen.nombre = 'Pepe';
console.log(otroMen);
console.log(aomine);
