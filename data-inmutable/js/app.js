const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

// const birthday = persona => persona.edad++

const inmutableBirthday = persona => ({
  ...persona,
  edad:  persona.edad + 1
})