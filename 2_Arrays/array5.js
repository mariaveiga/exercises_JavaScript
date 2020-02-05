/**
 * Dada una secuencia de números, escribe en pantalla
 * cuáles son los índices que indican el comienzo y 
 * fin de la sub-secuencia de números positivos más larga
 * 
 * Ej.: [1,1,1,1,1,1]  -> (0,5)
 *      [1,2,-4,4,6,2] -> (3,5)
 */
const values0 = [1,2,-4,4,6,2];
const values1 = [5,6,-1,5,2,7,-4]; // 3,5
const values2 = []
const values = [1,2,3]
const values4 = [-1]
const values5 = [1, -1]
const values6 = [-4,-6]

let i = 0;
// search first positive number
while (values[i] < 0) {
    i++;
} 

let currentFirstIndex = i;
let currentLastIndex = i;

let firstIndex = currentFirstIndex;
let lastIndex = currentLastIndex;

if (i==values.length) {
    firstIndex = 0;
    lastIndex = -1;
}

for (; i<values.length; i++) {

    if (values[i] >= 0) {
        currentLastIndex++;
        if (currentLastIndex  - currentFirstIndex > lastIndex - firstIndex) {
            firstIndex = currentFirstIndex;
            lastIndex = currentLastIndex;
        }
    } else {
        currentFirstIndex = i+1;
        currentLastIndex = currentFirstIndex;
    }
}

if (lastIndex < 0) {
    console.log('No hay ninguna secuencia de números positivos');
} else {
    console.log(`La secuencia es (${firstIndex}, ${lastIndex -1})`)
}

