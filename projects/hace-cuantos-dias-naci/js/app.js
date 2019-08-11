function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 60 * 60 * 24
  const diferencia = Math.abs(fecha1 - fecha2)

  return `naciste hace ${Math.floor(diferencia / unDia)} dias y tienes ${Math.floor((diferencia / unDia) / 365)} años`
    Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(2000, 5, 17)

console.log(diasEntreFechas(hoy, nacimiento))