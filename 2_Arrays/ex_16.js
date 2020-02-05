/**
 * Operando con más de dos elementos: Arrays
 * 
 * Para prácticar con los arrays, se proponen las siguientes actividades:
 *    - calcula la media de los elementos que sean mayores o iguales que 5;
 *    - crea un nuevo array cuyos elementos sean los de las posiciones
 *      pares del array original
 *    - crea un nuevo array cuyos elementos sean los números primos
 *      presentes en el array original
 *    - Obtén los valores mínimo y máximo de un array de números
 * 
 * 
 * NOTA: ¿Qué pasaría si en el array no hubiera ningún elemento?
 */

grades = [7.9, 9.11111, 1, 2];

// Media de los mayores que cinco
sum = 0;
counter = 0;

for (grade of grades) {
    if (grade >= 5) {
        sum = sum + grade;
        counter = counter + 1;
    }
}

average = sum/counter 

console.log(`La media de los mayores o iguales que cinco es: ${average}`);

// Array cuyos elementos sean los de las posiciones pares
arrayEven = []

for (index in grades) {
    if (index % 2 === 0) {
        arrayEven.push(grades[index]);
    }
}

console.log('Array con los elementos de las posiciones pares: ', arrayEven);


// Array con los primos que haya en el array
numbers = [1,2,4,5,6,7,8,9,13,14];
primeNumbers = [];

for (number of numbers) {
    isPrime = true;

    for (i=2; i<number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
        
    }
    if (isPrime) {
        primeNumbers.push(number);
    }
}

console.log(primeNumbers)




// Número máximo y mínimo en un array
numbers = [1,2,4,5,6,7,8,9,13,14];

min = 999999999;    // ¿y si hubiera un valor más alto que este?
max = 0

for (number of numbers) {
    if (number > max) {
        max = number
    }

    if (number < min) {
        min = number;
    }
}

console.log(`El mínimo es ${min} y el máximo es ${max}`);