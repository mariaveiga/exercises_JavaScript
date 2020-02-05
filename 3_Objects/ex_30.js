/**
 *  Agrupando variables: objetos
 * 
 *    - Notar cómo se pueden mezclar variables de distinto tipo
 *    - Acceso a elementos individuales
 *    - Modificar elementos individuales
 * 
 * De esta manera conseguimos que aquellas variables que guardan relación entre sí,
 * estén juntas, mejorando la estructura y legibilidad de la aplicación. 
 * 
 */

const nombre = 'Josefina';
const apellido1 = 'Martínez';
const apellido2  = 'Pérez';

const grades = [7.9, 9.9, 1, 7, 1, 10, 1];


const student = {
    name: 'Josefina',
    surname1: 'Martínez',
    surname2: 'Pérez',
    grades:  [7.9, 9.9, 1, 7, 1, 10, 1]
}

// Pintar en pantalla el objeto (JSON)
console.log(student);

// Acceso a elementos individuales en lectura
console.log(`Nombre: ${student.name}`);

// .. o en escritura
student.name = 'Mario';
console.log(student);
