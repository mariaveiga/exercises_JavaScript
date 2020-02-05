/**
 * Condicionales básicos
 * 
 *     - `magic numbers`: se debe evitar poner literales en el código 
 *       (números, cadenas, etc). Son los llamados `magic numbers`, esto es,
 *       valores que no se sabe muy bien su significado, especialmente si ya 
 *       ya ha pasado un tiempo desde que se ha escrito ese código, o ha sido
 *       escrito por otra persona. Para solucionarlo, se deben usar variables,
 *       con nombres semánticos, es decir, nombres que sean los más explicativos
 *       posibles.s
 */

NOTA_DE_CORTE = 5;

nota = 7;

pass = nota >= NOTA_DE_CORTE;

if (pass) {
    console.log('¡Estás aprobado!');
} else {
    console.log('Estás suspenso')
}

