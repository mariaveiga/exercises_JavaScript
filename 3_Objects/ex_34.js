/**
 * En este ejercicio se plantea contar la letras de un texto
 * real, más largo, como puede ser el Quijote.
 * 
 * Para ello, leeremos un fichero directamente desde disco.
 * En este momento no es necesario entender cómo funcionan
 * los mecanismos que nos ofrece NodeJS para acceder al 
 * sistemas de ficheros, simplemente usaremos la función
 * `fs.readFileSync` que nos devolverá el texto disponible 
 * en el fichero en formato cadena.
 * 
 * ¿Y si quisiéramos obtener la lista de manera ordenada?
 * La opción revisada en clase consiste en usar la función 
 * `sort` que nos ofrecen de manera nativa los `arrays`. Sin 
 * embargo, los contadores de letras los tenemos almacenados 
 * en un objeto, cuyos atributos no tienen un orden entre ellos
 * ni son un array. Para solucionarlo hacemos uso de `Object.entries`
 * que nos devolverá un array de pares clave-valor, en formato
 * `array` (haced un `console.log` de `paresOrdenados` para
 * estudiar cómo se almacenan).
 * 
 * Una vez que tenemos el array de pares clave-valor, donde la
 * clave es cada una de las letras encontradas y el valor su 
 * cantidad, ya podemos aplicar las función `sort`. Como no se trata
 * de un array sencillo, esto es, un array de números o letras, sino
 * que es un array de arrays, tenemos que decirle a `sort` cuál es el 
 * criterio de ordenación. Para ello le pasaremos una función como
 * parámetro:
 * 
 * `entries.sort( function (a,b) { return b[1] - a[1]} );`
 * 
 * En esta función se está comparando dos elementos genéricos 
 * del array. En nuestro caso lo que nos interesa ordenar son los
 * valores (es decir, el número de ocurrencias de cada letra), que 
 * se almacenan en la posición `1` del array:
 * 
 * [['a', 2], ['b', 9], ['c', 1]]
 * 
 * Probad a cambiar el fragmento `b[1] - a[1]` por `a[1] - b[1]`
 * y veréis cómo cambia el criterio de ordenación
 * 
 * Más: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
 */
const fs = require('fs');

function countLetters(text) {
    let counters = {};

    for (let letter of text) {
        let letterCamel = letter.toUpperCase();

        if (counters[letterCamel] !== undefined) {
            counters[letterCamel]++;
        } else {
            counters[letterCamel] = 1;
        }
    }   

    return counters;
}

let quijoteText = fs.readFileSync('resources/el_quijote.txt', 'utf8');
let letters = countLetters(quijoteText);

let entries = Object.entries(letters);

paresOrdenados = entries.sort( function (a,b) { return b[1] - a[1]} );

console.log(paresOrdenados)
console.log('Más frecuente ', paresOrdenados[0])