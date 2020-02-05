/**
 * Filter/map
 * 
 * Este tipo de estructuras es tan común que javascript
 * nos ofrece mecanismos nativos para llevarlos a cabo 
 * más fácilmente.
 * 
 * `filter` es un método de los `arrays` que ejecuta la función 
 * que se le pasa como parámetro por cada elemento del `array`
 * y devuelve un nuevo array. Este nuevo array se crea de la siguiente
 * manera: 
 * 
 *    - si la función, que se ejecuta por cada elemento, devuelve `true`,
 *      dicho elemento se incorpora al array de salida;
 *    - si devuelve `false`, dicho elemento no estará presente en el array
 *      de salida 
 * 
 * `map` es el método encargado de hacer las transformaciones. Al igual
 * que `filter` recibe una función que se ejecutará por cada elemento del 
 * array. En este caso, el array resultante se crea a partir de la transformación
 * de cada uno de los elementos del array original. En el caso que nos ocupa
 * lo que haremos es partir de un objeto y quedarnos con uno de sus campos.
 * 
 */



function getPassedStudents(exams, maxTimeInSeconds) {

    const filteredExams = exams.filter( function (exam) {
        let dif = (exam.fin - exam.ini) / 1000;

        return  (dif < maxTimeInSeconds);
     })

     const output = filteredExams.map(function (exam) {
         return exam.name
     })

     return output;
}


const times = [
    {
        name: 'andres',
        ini: new Date(2019, 9, 4, 12, 0, 0),
        fin: new Date(2019, 9, 4, 12, 6, 0),
    },
    {
        name: 'maria',
        ini: new Date(2019, 9, 4, 12, 0, 0),
        fin: new Date(2019, 9, 4, 12, 4, 0),
    },
] 

let passed = getPassedStudents(times, 300); // ['maria']

console.log(passed);