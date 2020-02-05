/**
 * Dado un array de números, devuelve un nuevo array
 * cuyo valores sean la suma acumulada de todos los valores
 * desde la primera posición hasta la actual.
 * 
 * Ejemplo:
 *   - Array entrada: [1,2,3,4]
 *   - Array salida:  [1,3,6,10]
 * 
 */

 values = [1,2,3,4];
 accumulatedValues = [];

 accumulator = 0;

 for (value of values) {
    accumulator = accumulator + value;

    accumulatedValues.push(accumulator);
 }

 console.log(accumulatedValues);