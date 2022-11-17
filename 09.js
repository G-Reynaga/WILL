/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  // aqui definimos nuevo metodo filtar la cual llama a una funcion (cb) --> que esa funcion devuelve el nombre del producto y el precio
  Array.prototype.filtrar = function(cb){
    // aqui creamos una variable con un arreglo vacio para que se llene al final
    newArrary = []
    //aqui realizamos un bucle foreach que indica que el valor Item que seria iterador que se presente haga chequeo de
    this.forEach(item =>{
      // una condicional que dice si en la funcion callback que estamos llamando esta dentro ese item pusheame al nuevo arreglo el item
      if(cb(item)){
        //si es true o verdadero pusheame
        newArrary.push(item)
      }
    })
    // aqui devolvemos el item al nuevo array para mostrar resultado
    return newArrary
  }
};

// No modifiques nada debajo de esta linea //

module.exports = filtrar