/**
 * Partiendo de la base desarrollado en el ejercicio anterior, 
 * ¿podemos hacer que los datos se obtengan dinámicamente
 * directamente de Internet? 
 * 
 * Sí, es posible. Para ello haremos uso de librerías. De la misma
 * forma que para acceder al sistema de ficheros usábamos `fs`, ahora
 * usaremos otra librería para acceder a la red. Su nombre es `axios`.
 * Se trata de una librería externa, que es necesario instalar 
 * explícitamente. `nodejs` también implementa sus propios mecanismo de 
 * acceso a la red, pero su uso es más complejo por lo que obtamos
 * por `axios` que nos abstrae de muchos detalles.
 * 
 * El objetivo de este ejercicio es descargar de Internet
 * el fichero correspondiente a las banderas azules de 2017.
 * 
 * El mecanismo que usamos para ejecutar código de manera asíncrona
 * se denomina `Promesa`. Concretamente diremos que `axios.get`
 * devuelve una promesa que, cuando se cumpla, esto es, cuando finalice
 * la descarga del fichero, ejecutará la función que indicamos
 * a continuación del `then`
 * 
 * Nota que los datos que nos interesan están en `response.data`. Prueba
 * a pintar por pantalla el objeto `response` y observa
 * la cantidad de campos que tiene.
 * 
 */

const axios = require('axios');

/**
 * 
 * Devuelve un array con los `count` ayuntamientos
 * con más playas. 
 * 
 * Es decir, el primer elemento del array será el nombre
 * del ayuntamiento con más playas, el segundo elemento 
 * tendrá el nombre del segundo ayuntamiento con más playas, 
 * y así hasta `count`
 */
function getCouncilsWithMoreFlags(flags, count) {
}


/**
 * Devuelve el número de banderas azules para el 
 * ayuntamiento indicado
 * 
 * @param flags - Array con las líneas del CSV descargado
 * @param council - nombre del ayuntamiento buscado 
 */
function getNumberOfFlagsByCouncil(flags, council) {
  let counter = 0;
  const COUNCIL_POSITION = 2;

  for (let line of flags) {
    const fieldsOfLine = line.split(';');

    // hay lineas en blanco. Tenemos que evitar que el 
    // código siga ejecutándose porque daría error al intentar
    // acceder a la posición `COUNCIL_POSITION`
    if (fieldsOfLine.length === 1) {
      continue;
    }

    if ((fieldsOfLine[COUNCIL_POSITION].toUpperCase().indexOf(council.toUpperCase()) !== -1) ||
      (fieldsOfLine[COUNCIL_POSITION].length !== 0 && council.toUpperCase().indexOf(fieldsOfLine[COUNCIL_POSITION].toUpperCase()) !== -1)) {
      counter++;
    }
  }

  return counter;
}

function getNumberOfFlagsByCouncilFunctional(flags, council) {
  const COUNCIL_POSITION = 2;

  const beachs = flags
    .filter(flag => flag.trim().length !== 0)
    .map(flag => flag.split(';'))
    .filter(flag => flag[COUNCIL_POSITION].toUpperCase().indexOf(council.toUpperCase()) !== -1)

  return beachs.length
}


const council = 'Vigo';

axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv')
  .then(response => {
    const counterOfBeachs = getNumberOfFlagsByCouncil(response.data.split('\n'), 'Vigo')

    console.log(`[2017] ${council}: ${counterOfBeachs}`);
  });


console.log('Esta línea está al final del fichero.. pero no es la última en ejecutarse')