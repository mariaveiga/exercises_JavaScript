/**
 * Prueba a ejecutar el siguiente código:
 *    - primero tal como está
 *    - después, descomenta la línea del `console.log`
 * 
 * ¿Observas la diferencia en el tiempo de ejecución? Cuando introducimos
 * `console.log` la aplicación tarda mucho más en ejecutarse. El motivo
 * de esto es que las operaciones de entrada/salida, esto es, aquellas
 * que hacen uso de un periférico externo, como el disco duro, la pantalla
 * o la red, son operaciones muy lentas. 
 * 
 * En ejercicios pasados accedimos al sistemas de ficheros
 * mediante la instrucción `fs.readFileSync`. Se trataba también
 * de una operación muy lenta, que bloquea la ejecución del programa
 * mientras no termina. Esto supone un malgasto de CPU, que podría
 * usarse para ejecutar otras líneas de código. La solución a este
 * problema pasa por ejecutar funciones de manera asíncrona. Algo
 * similar a lo que hacíamos con `setTimeout `. Veremos cómo en los
 * siguientes ejercicios.
 * 
 */

 let suma = 0;
 for (let i=0; i<1000000; i++) {
//    console.log(i);
    suma += i;
 }