/**
 * Cómo declarar variables.
 * 
 * Hasta ahora las variables utilizadas las podíamos leer y modificar en
 * cualquier parte del código. Sin embargo, cuando la aplicación crece,
 * esto puede llegar a ser un problema: puede que, accidentalmente, 
 * cambiemos el valor de una variable que no deberíamos
 * 
 * Para solucionar el primer caso, declararemos las variables como constantes, anteponiendo 
 * la palabra `const`.
 * 
 * Para restringir el ámbito de uso de una variable, su `scope`, la declararemos en el bloque 
 * de código (líneas entre llaves) más pequeño posible. Aquellas variables cuyo valor
 * pueda ser modificado las declaremos anteponiendo la palabra `let`.
 * 
 */

const PASS_NOTE = 5;

const average_grade = 3;
let grade;

if (average_grade > PASS_NOTE) {
    const prefix = '¡¡';
    const suffix = '!!';

    grade = `${prefix}APROBADO${suffix}`;
} else {
    const prefix = '(';
    const suffix = ')';

    grade = `${prefix}SUSPENSO${suffix}`;
}

console.log('Grade: ', grade);
console.log('Bracked: ', prefix);