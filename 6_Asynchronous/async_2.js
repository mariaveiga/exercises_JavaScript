/**
 * En los próximos ejercicios veremos cómo hacer peticiones de red,
 * es decir, pedirle a `NodeJS` que descargue de Internet el contenido
 * de una `URL`. Esta descarga no será inmediata, así que estudiaremos
 * un mecanismo para indicarle cuál es el código que tiene que ejecutar una 
 * vez finalizada.
 * 
 * Antes de eso, implementemos una serie de funciones auxiliares que, de paso,
 * nos sirven de repaso de cómo iterar `arrays`, bien con `for` tradicional
 * o con `map/filter`
 * 
 * El ejercicio consiste en implementar dos funciones que realizan estadísticas
 * sobre datos reales: las banderas azules en ayuntamientos gallegos. En esta
 * primera aproximación leeremos los datos de disco. En ejercicios posteriores
 * lo reimplementaremos para descargarlo directamente de la red.
 * 
 * 
 */

const fs = require('fs');

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
  const bandeiras = fs.readFileSync(`${__dirname}/../resources/bandeiras_azuis_2019.csv`, 'latin1').toString().split('\n');
  const counterOfBeachs = getNumberOfFlagsByCouncilFunctional(bandeiras, council);

  console.log(`${council}: ${counterOfBeachs}`);