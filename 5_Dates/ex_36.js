/**
 * Fechas
 * 
 * Javascript incluye facilidades para trabajar con fechas. `Date`
 * es un objeto que ofrece una serie de métodos para manejar fechas.
 * 
 * `new Date()` crea un nuevo objeto en el cual podemos invocar sus 
 * métodos nativos como:
 *    - `getFullYear`
 *    - `getDate()`
 *    - `getMonth()`
 * 
 * Las lista completa puede consultarse en:
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
 * 
 * En el siguiente ejercicio, escribe una función que devuelva 
 * una cadena de texto con un formato con el del siguiente ejemplo:
 *  
 * `Sábado, 20 de abril de 1990`
 * 
 * Para ello, la función recibirá día, mes y año en formato numérico.
 * 
 * Ten en cuenta que:
 *   - para el objeto `Date` los meses empiezan en 0
 *   - quizá no sea necesario para este ejercicio, pero recuerda que 
 *     la hora que devuelve Date cuando la pintamos en pantalla es la
 *     hora universal, sin aplicar la diferencia horaria de cada región
 *     geográfica del mundo.  
 * 
 */
function formatDate(day, month, year) {
    let meses = ['enero', 'febrero', 'marzo','abril','mayo','junio','julio','agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    let anho = year; 
    let diaMes = day;
    let mes = meses[month - 1];

    let date = new Date(year, month -1, day);
    let diaSemana = dias[date.getDay()];

    return `${diaSemana}, ${diaMes} de ${mes} de ${anho}`;
}