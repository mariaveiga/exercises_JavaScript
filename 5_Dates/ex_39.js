/**
 * Fechas
 * 
 * Vamos a programar un despertador, simulando el pitido
 * con un mensaje por pantall. ¿Cómo funciona un despertador?
 * Se elige una hora, posterior a la actual, y el despertador
 * suena a dicha hora.
 * 
 * Traducido a lenguaje de progración lo podríamos enunciar como:
 *    - definir la fecha a la que nos queremos despertar
 *    - calcular cuánto tiempo queda hasta dicha hora
 *    - esperar el tiempo calculado y hacer sonar (pintar en pantalla)
 *      el despertador en ese instante
 * 
 * 
 * La solución indicada en el ejemplo tiene un problema muy grave. Mientras
 * el despertador está esperando a sonar está colapsando la CPU del 
 * ordenador. Esto es así porque el bucle se está ejecutando
 * continuamente (prueba a poner un console.log en su interior). También
 * puedes ejecutar el comando `top`, en la terminal, y verás que la 
 * aplicación emplear el 100% de la CPU.
 * Veremos en ejercicios posteriores cómo se Javascript nos ofrece
 * mechanismos para solucionar este problema de la espera
 * 
 * A mayores, puedes completar esta aplicación con lo siguiente:
 *     - formatea el tiempo que queda para que suene el despertador
 *       de manera más amigable. Si quedan 8 horas, con la implementación
 *       actual pondría el tiempo en segundos, lo cual no es muy
 *       legible
 *     - ¿qué pasa si la hora a la que se pone el despertador es
 *        menor que la actual? ¿Suena el despertador?
 */

// definir la hora a la que nos queremos despertar
const wakeUpHour = new Date(2019, 9, 3, 0, 35);

// calcular cuánto tiempo queda hasta dicha hora
const timeToWait = parseInt((wakeUpHour.getTime() - Date.now())/1000); // tiempo en segundos

console.log(`El despertador sonará en: ${timeToWait} seconds`);

// esperar el tiempo calculado
// el bucle `while` se ejecuta mientras se cumpla la condición
// indicada. En este caso, `Date.now()` tomará un valor distinto
// en cada iteración, ya que pide la hora actual, que será mayor
// cada vez. Cuando la hora actual deje de ser menor que la hora
// a la que hemos puesto el despertador, el bucle se terminará
// y ejecutará el código a continuación
while  (Date.now() < wakeUpHour) {}

// hacer sonar el despertador
console.log('Sonando!!!');
