/**
 * Filter/map
 * 
 * Hemos visto cómo `filter` y `map` se aplican
 * sobre un `array` y, a su vez, devuelven también 
 * un `array`. Esta característica permite que se
 * puedan encadenar, como se muestra en la modificación
 * realizada en `getPassedStudents`.
 * 
 * Nótese también cómo se ha sustituido la sintaxis
 * clásica de funciones (`function`) por la más moderna
 * (`=>`)
 * 
 */

function getPassedStudents(exams, maxTimeInSeconds) {

    return exams
        .filter( exam => {
            let dif = (exam.fin - exam.ini) / 1000;

            return  (dif < maxTimeInSeconds);
         })
        .map(exam => exam.name)
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