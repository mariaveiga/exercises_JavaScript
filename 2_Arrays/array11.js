/**
 * Dado un array de valores enteros y un número `target`,
 * devolver los índices de los dos valores cuya suma
 * sea `target`. Los índices no pueden estar repetidos.
 * 
 * Notas a la solución:
 *    - la lógica del ejercicio consiste en recorrer los
 *      valores del array y preguntarse si existe otro
 *      valor en el array tal que su suma con el valor
 *      que estamos iterando sea `target`
 * 
 *    - la primera solución consiste en iterar sobre todos
 *      los elementos del array, en un segundo bucle, hasta 
 *      encontrar el que nos interesa. Notad cómo no es necesario
 *      comenzar en cero, ya que ese valor ya lo habremos comprobado
 *      en una interación anterior
 * 
 *    - la segunda opción sustituye el segundo for por un `indexOf`, 
 *      es decir, en lugar de iterar nosotros mismos sobre el array
 *      buscando el valor que nos interesa, usamos el mecanismo
 *      que ya nos ofrece el array para obtener dicho valor. En realidad 
 *      es la misma implementación que la primera, pero dejando que el 
 *      `indexOf` haga ese `for` interno
 * 
 *    - existe una tercera, que consiste en 'apuntar' los valores
 *      ya vistos en un objeto, de forma que sepamos en qué posición
 *      está un valor que nos interesa sin necesidad de volver a
 *      recorrer el array. No os preocupéis si no pensasteis en esta
 *      solución. Es la más corta y rápida, pero se necesita práctica
 *      para llegar a ella.
 */


const values = [1,3,4,5,8];
const target = 7;
let found = false;

// IMPLEMENTACIÓN 1: buscar el número complementario
// en todos los elementos restantes del array
for (let i=0; i<values.length; i++) {
  if (found) {
    // si ya encontramos los pares en el bucle interior
    // found estará a true. No es necesario seguir
    break;
  } 

  // ojo! j=i+1 (los anteriores ya sabemos que no suman el target)
  for (let j=i+1; j<values.length; j++) {   
        if (values[i] + values[j] === target && i !== j) {
          console.log(`Las posiciones son: (${i}, ${j})`);
          found = true
          break;
        }
    }
}


// IMPLEMENTACIÓN 3: almacenar valores vistos en un objeto
let posiciones = {}
for (let i=0; i<values.length; i++) {
  posiciones[values[i]] = i; 

  if  (posiciones[ target - values[i] ] !== undefined && posiciones[ target - values[i] ]  !== i) {
    console.log(`Las posiciones son: (${i}, ${posiciones[ target - values[i]]})`);
    break;
  }
}