/**
 * Dado un array de números devuelve un nuevo 
 * array donde cada elemento se haya desplazado 
 * una posición hacia la derecha.
 * 
 * Ejemplo:
 * 
 * Array original: [1,2,3,4]
 * Array resultante: [4,1,2,3]
 * 
 * Nota cómo se trata de un desplazamiento circular,
 * donde el último elemento pasa a ser el primero
 */
values = [1, 3, 4, 5, 2, 8];

shiftedArray = [];

shiftedArray.push(values[values.length - 1]);

for (i=0; i<values.length - 1; i++) {
    shiftedArray.push(values[i])
}

console.log(shiftedArray);