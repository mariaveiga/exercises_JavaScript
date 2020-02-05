/**
 * Operando con más de dos elementos
 * 
 * Para solucionar alguno de los inconvenientes enumerados en el ejercicio anterior
 * usaremos un `Array`. Un Array es una colección de elementos.
 *  
 * Array
 *    - ¿Cuál es la longitud de un array?
 *    - ¿Cuál es el primer elemento?
 *    - ¿Qué pasa si se intenta acceder a una posición mayor que la longitud?
 *    - ¿Se pueden añadir elementos además de los declarados inicialmente?
 */

grades = [7.9, 9.11111, 1, 2];

average_grade = (grades[0] + grades[1] + grades[2] + grades[3])/grades.length;

console.log('Average grade is: ', average_grade);
