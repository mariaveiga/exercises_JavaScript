/**
 * Scope de variables
 *   
 * ¿Qué pasa si tenemos variables repetidas en
 * distinto `scope`?
 * 
 */
const text = 'texto fuera';
const number = 10;

if (number > 0) {
    const text = 'texto dentro';
    console.log(text);
}

console.log(text);
