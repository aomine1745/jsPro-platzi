// FUNCIONES

// FUNCIONES QUE RETORNAN VALOR
var aomine = {
  nombre: 'aomine',
  edad: 18
}

var juan = {
  nombre: 'juan',
  edad: 16
} 

const MAYORIA_DE_EDAD = 18;

function mayorDeEdad(persona){ 
  var validate = validateMayorDeEdad(persona.edad);
  if(validate){
  // if(validateMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`);
  }else {
    console.log(`${persona.nombre} es menor de edad`);
  }
  if(permitirAcceso(validate)){
    console.log('acceso denegado');
  }else {
    console.log('Bienvenido');
  }
}

// function validateMayorDeEdad(edad){
//   return edad >= MAYORIA_DE_EDAD  
// }

// const validateMayorDeEdad = function(edad){
//   return edad >= MAYORIA_DE_EDAD  
// }

// ARROW FUNCTIONS

// const validateMayorDeEdad = (edad) => { 
//   return edad >= MAYORIA_DE_EDAD;
// }

// const validateMayorDeEdad = ({ edad }) => {
//   return edad >= MAYORIA_DE_EDAD;
// }

const validateMayorDeEdad = edad => edad >= MAYORIA_DE_EDAD;

// const permitirAcceso = (persona) => {
//   if(!validateMayorDeEdad(persona.edad)){
//     console.log('acceso denegado');
//     }
// } 

const permitirAcceso = (validate) => {
  if(!validate){
    return true;
    }else {
      return false;
    }
} 