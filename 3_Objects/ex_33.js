/**
 *  Agrupando variables: objetos
 * 
 *    - Aplicación: contar cuántas letras hay en una cadena de texto
 *    - ¿Afecta la implementación realizada al tiempo de ejecución?
 * 
 * Notad cómo, gracias a que los objetos nos permiten añadir
 * claves dinámicamente, no es necesario crear variables para 
 * cada una de las posibles letras que pueda tener la cadena. 
 * De esta manera, la implementación es totalmente independiente
 * de la cadena de entrada.
 * 
 */

const text = "en un lugar de la mancha de cuyo nombre no quiero acordarme";

let characterList = {};

for (let i=0; i<text.length; i++) {
    if (!characterList[text[i]]) {
        characterList[text[i]] = 1;
    } else {
        characterList[text[i]]++;
    }
}

console.log(characterList);
