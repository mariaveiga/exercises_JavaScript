/**
 * Filter/map
 * 
 * En `ex_38.js` programamos la función `getPassedStudents`, que
 * devolvía un array con los nombres de los estudiantes que habían
 * tardado menos de un tiempo en realizar un examen.
 * 
 * Este tipo de problemas son muy comunes: data una lista de 
 * elementos generar una nueva lista que filtra la original
 * y realiza alguna transformación sobre los datos. En este caso:
 *     - filtrado: quedarse sólo con los estudiantes 
 *       cuyo tiempo sea menor que el indicado
 *     - transformación: cada objeto (los elementos del array original)
 *       se traduce a una cadena de texto (el nombre del estudiante)
 * 
 * 
 * ¿Podemos rehacer la función para que estos dos pasos se vean 
 * más claramente?
 */


function getPassedStudents(exams, maxTimeInSeconds) {

    let passedExams = [];
    let output = [];

    // FILTRADO
    for (let exam of exams) {
        const dif = (exam.fin - exam.ini) / 1000;

        if (dif < maxTimeInSeconds) {
            passedExams.push(exam)
        }
    }

    // TRANSFORMACIÓN
    for (let exam of passedExams) {
        output.push(exam.name);
    }

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