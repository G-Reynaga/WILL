/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Tu código acá:
  newArray = array.map((i) =>{ // el map crae un nuevo arreglo con la solicitud de el elemento [i] que desees
    return i[propiedad] // aqui le decimos que nos retorne y buscque con el metodo map la I (iterator) y dentro del array pidiendo el nombre de la propiedad
  })
  return newArray // aqui retornamos el nuevo arreglo con el metodo map.

}

// No modifiques nada debajo de esta linea //

module.exports = pluck