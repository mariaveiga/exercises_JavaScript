/**
 * Operando con más de dos elementos: Arrays
 * 
 * Para solucionar alguno de los inconvenientes enumerados en el ejercicio anterior
 * usaremos un `Array`. Un Array es una colección de elementos.
 *  
 * ¿Cómo podemos usar un `Array` para calcular la media de un conjunto de números,
 * independimiente de su número, sin modificar el código?
 * 
 * Para ello utilizaremos los `bucles`, que permiten iterar sobre los elementos de un
 * `Array`
 * 
 * Hay varios tipos de bucles, cuya idoneidad dependerá de cada situación. Para 
 * familiarizarte, trata de calcular la media de los números de un `Array`, usando 
 * los siguientes:
 * 
 *   - `for ... of` 
 *      (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#sentencia_for...of)
 *   - `for ... in` 
 *      (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#sentencia_for...in)
 *   - `for (let <variable>=<valor inicial>; <condición>; <acción al terminar la iteracción>)`
 *      https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#sentencia_for
 *   - `while (condición)` 
 *      (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n#sentencia_while)
 * 
 * 
 *
 */

grades = [7.9, 9.11111, 1, 2];

sum_grades = 0;

for (grade of grades) {
    // console.log...
    sum_grades = sum_grades + grade;
}

average_grade = sum_grades / grades.length;

console.log('Average grade is: ', average_grade);
