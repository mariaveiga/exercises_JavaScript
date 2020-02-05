/**
 * Dado un array de números, crear uno nuevo
 * cuyos elementos sean los cuadrados del array
 * original
 */

values = [1, 3, 4, 5, 2, 8];
squares = [];
 
for (value of values) {
    squares.push(value*value);
}

console.log(squares);