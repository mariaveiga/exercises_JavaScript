/**
 *  Agrupando variables: objetos
 * 
 *    - Iterar sobre todos los campos del objeto
 */

const student = {
    name: 'Josefina',
    surname1: 'Martínez',
    surname2: 'Pérez',
    grades:  [7.9, 9.9, 1, 7, 1, 10, 1]
}

for (let [key,value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}

// nos puede interesar saber qué campos tiene el objeto
console.log('Claves: ');
for (let key of Object.keys(student)) {
    console.log(`Key: ${key}`);
}

// ... o solo los valores
console.log('Valores: ');
for (let value of Object.values(student)) {
    console.log(`Value: ${value}`);
}
