/**
 * Objetos: referencias y valores
 * 
 * Cuando queríamos comparar valores numéricos o caracteres,
 * hacíamos simplemente `a === b`, donde a y b eran las
 * variables que almacenaban dichos valores.
 * 
 * En el caso de los objetos la comparación no es tan sencilla:
 *     - define dos objetos con los mismos campos y valores, compáralos
 *       de la misma manera que hacíamos con los números. ¿Funciona?
 * 
 *     - prueba a asignar un objeto a una variable y modifica alguno
 *       de sus campos, ¿se modifica en el objeto original?
 * 
 */

 let a = {
     x: 0,
     y: 0
 };

 let b = {
     x: 0,
     y: 0
 };

 let c = b;

 console.log(' a === b: ', a === b);  // false, aunque sus valores son iguales
 console.log(' c === b: ', c === b);  // true, porque los dos 'apuntan' al mismo objeto
                                      // (pensad en el ejemplo de los accesos directos)

 c.x = 100;
 console.log('b', b);   // x vale 100, porque aunque se ha cambiado en c, 
                   // ambos apuntan al mismo objeto

 let d = Object.assign({}, a);
 a.x = 999;
 console.log('d', d); // d.x vale 0 porque Object.assign crea un objeto nuevo