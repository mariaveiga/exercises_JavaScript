/**
 * Fechas, setTimeout
 * 
 * Vamos a programar un despertador, simulando el pitido
 * con un mensaje por pantall. ¿Cómo funciona un despertador?
 * Se elige una hora, posterior a la actual, y el despertador
 * suena a dicha hora.
 * 
 * Para aliviar el problema de la implementación actual que 
 * hacía un uso intensivo de CPU, vamos a usar los temporizadores
 * que nos ofrece javascript. 
 * 
 * Hasta ahora, siempre que llamábamos a una función, ésta se ejecutaba
 * inmediatamente. Sin embargo, hay ocasiones, como la del despertador,
 * donde nos interesa ejecutar un fragmento de código en un instante
 * del futuro. Para ello se emplean los temporizadores: `setTimeout`
 * 
 * `setTimeout` es una función que recibe dos parámetros, una función y 
 * un tiempo en milisegundos, y lo que hace es lo siguiente:
 *    - ejecutar la función pasada como primer parámetro tantos milisegundos
 *      después como se indique en el segundo parámetro.
 * 
 * ¿Cómo podemos usarla para nuestro despertador?
 */

// definir la hora a la que nos queremos despertar
const wakeUpHour = new Date(2019, 9, 3, 0, 47);

// calcular cuánto tiempo queda hasta dicha hora
const timeToWait = parseInt((wakeUpHour.getTime() - Date.now())/1000); // tiempo en segundos

console.log(`El despertador sonará en: ${timeToWait} seconds`);

setTimeout(function() {
    console.log('Sonando!!!')
}, timeToWait * 1000)


// notad cómo escribe esta línea en pantalla antes de 
// escribir 'Sonando!!!'. Esto nos demuestra que la aplicación
// no está bloqueada, como pasaba con la implementación del 
// ejercicio anterior
console.log('Esta línea está después de la llamada a setTimeout')