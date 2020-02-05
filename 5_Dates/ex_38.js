/**
 * Fechas
 * 
 * Escribe una función que devuelva un array con los nombres
 * de aquellos estudiantes que hayan realizado un ejercicio 
 * en menos del tiempo indicado como parámetro `maxTimeInSeconds`
 * 
 * La estructura del primer parámetro es la siguiente:
 * 
 * [
 *   {
 *       name: 'andres',
 *       ini: new Date(2019, 9, 4, 12,0,0),
 *       fin: new Date(2019, 9, 4, 12,6,0),
 *   },
 *   {
 *       name: 'maria',
 *       ini: new Date(2019, 9, 4, 12,0,0),
 *       fin: new Date(2019, 9, 4, 12,4,0),
 *   },
 * ]
 * 
 */

function getPassedStudents(times, maxTimeInSeconds) {
    // devuelve un array con los nombres de los estudiantes
    // que hayan aprobado. Un estudiante aprueba si termina
    // el ejercicio en menos de `maxTimeInSeconds`

    let passed = [];

    for (let exam of times) {
        let dif = (exam.fin - exam.ini)/1000;

        if (dif < maxTimeInSeconds) {
            passed.push(exam.name)
        }
    }

    return passed;   
}  


const times = [
    {
        name: 'andres',
        ini: new Date(2019, 9, 4, 12,0,0),
        fin: new Date(2019, 9, 4, 12,6,0),
    },
    {
        name: 'maria',
        ini: new Date(2019, 9, 4, 12,0,0),
        fin: new Date(2019, 9, 4, 12,4,0),
    },
]

getPassedStudents(times, 300); // ['maria']
