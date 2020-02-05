/**
 * En el ejercicio `array2` habíamos desplazado el array
 * una posición a la derecha, excepto el último que lo poníamos
 * al principio. Se trataba de un desplazamiento circular.
 * 
 * ¿Qué pasaría si en lugar de desplazar una posición lo desplazamos
 * un número desconocido a priori?
 * 
 * Por ejemplo, en el siguiente array:
 *    [1,2,3,-1,6,7,8]
 * 
 * lo vamos a desplazar usando el primer valor negativo que aparezca
 * como pivote, es decir, todos los valores a partir de este aparecerán
 * al principio. Para este ejemplo, el array resultante sería:
 *    [6,7,8,1,2,3,-1]
 *
 */