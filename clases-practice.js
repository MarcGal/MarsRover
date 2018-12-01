// TODO ESTO ES ES5

// FUNCION CONSTRUCTORA QUE NOS VA A GENERAR UN OBJETO
// Le indicamos las propiedades que tendran nuestros futuros objetos.
// Si quisieramos que todos sean iguales de entrada, simplemente definimos los valores de las propiedades
// dentro de la clase. No le damos posibilidad al usuario para que defina los valores.

function Rover (direction, position){
  this.direction = direction;
  this.position = position;
}

// las funciones como propiedades no se declaran dentro de la clase
// se declaran en el prototype
// de esta manera llegamos al polimorfismo: significa que diferentes clases puedencompartir el prototype

Rover.prototype.sayPosition = function (){
  console.log('position x: ' + this.position.x + ', position y : ' + this.position.y);
}

// ahora hacemos una instancia del rover

let rover1 = new Rover ('N', {x:0, y:0});

let rover2 = new Rover ('E', {x:1, y:4});


// Despues de haber sido creadas, las propiedades de cada instancia pueden ser modificadas
// las propiedades de cada instancia son publicas


  // por fuera de la funcion constructora declaramos los metodos que tendran en comun todas
  // las instancias. Estas estaran incluidas en el prototype 


  var commands = 'llfffbrrl';

  
