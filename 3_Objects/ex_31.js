/**
 *  Agrupando variables: objetos
 * 
 *   - la estructura inicial se puede modificar durante la ejecución
 */

const student = {
    name: 'Josefina',
    surname1: 'Martínez',
    surname2: 'Pérez',
    grades:  [7.9, 9.9, 1, 7, 1, 10, 1]
}

student.age = 23;

delete student.surname2;

// Pintar en pantalla el objeto (JSON)
console.log(student);

