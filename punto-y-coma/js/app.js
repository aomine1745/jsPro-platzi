// Casos obligatorios del uso del punto y coma
// 1.
console.log('Hola mi nombre es aomine');
[1, 2, 3].forEach(n => console.log(n * 2))
// 2.
const nombre = 'aomine'
console.log('Hola mi nombre es aomine');
`${nombre} es un desarrollador`

// caso especial
function calcularDoble(n) {
  // return
  // {
  //   original: n,
  //   doble: n * 2
  // }
  return { original: n, doble: n * 2 }
}