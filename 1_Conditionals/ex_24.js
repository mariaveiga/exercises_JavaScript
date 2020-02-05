/**
 * Condicionales encadenados
 * 
 * Las condiciones usada hasta ahora eran simples, existiendo solamente
 * dos casos: se cumple o no se cumple. Sin embargo, en la práctica,
 * solemos tener casos más complejos.
 * 
 * Pensemos en el que caso asignar la nota en formato texto a una nota númerica, 
 * siguiendo las normas habituales:
 *    [0-5), suspenso
 *    [5-7), aprobado
 *    [7-9), notable
 *    [9-10], sobresaliente
 * 
 */

const grade = 9.1;

if ((grade >= 5) && (grade < 7) ) {
    console.log('APROBADO');
} else if ((grade>=7) && (grade < 9)) {
    console.log('NOTABLE');
} else if ( (grade>=9) && (grade <= 10)) {
    console.log('SOBRESALIENTE');
} else {
    console.log('SUSPENSO');
}