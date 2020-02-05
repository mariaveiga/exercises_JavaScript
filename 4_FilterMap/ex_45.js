/**
 * Filter/map
 * 
 * Podemos ver la solución anterior de otra manera
 * utilizando funciones.
 * 
 * Nota cómo nuestra función ha quedado 
 */


function _filterStudents(exams, maxTimeInSeconds) {
    let passedExams = [];

    // FILTRADO
    for (let exam of exams) {

        let dif = (exam.fin - exam.ini) / 1000;

        if (dif < maxTimeInSeconds) {
            passedExams.push(exam)
        }
    }

    return passedExams;
}

function _transformExam(exams) {
    let output = [];

    // TRANSFORMACIÓN
    for (let exam of exams) {
        output.push(exam.name);
    }
    return output;
}

function getPassedStudents(exams, maxTimeInSeconds) {

    const passedExams = _filterStudents(exams, maxTimeInSeconds);
    const output = _transformExam(passedExams);

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