/**
 * Condicionales básicos: 
 * 
 * La condición a evaluar se puede aplicar a cualquier tipo 
 * de variable. En este ejemplo se explora cómo se evalúa la longitud
 * de una cadena de texto.
 * 
 * ¿Y si necesitamos aplicar dos condiciones al mismo tiempo? Por ejemplo,
 * la cadena debe ser mayor que un determinado umbral inferior y menor que un 
 * umbral superior.
 * 
 * Echad un ojo a la documentación de MDN sobre operadores:
 *   https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_de_comparaci%C3%B3n
 * 
 * 
 */

LONGITUD_MAXIMA = 10;

nombre = 'Francisco Guerrero'

higher_length = nombre.length >= LONGITUD_MAXIMA;

if (higher_length) {
    console.log('¡Demasiado largo!');
} else {
    console.log('Longitud correcta')
}

