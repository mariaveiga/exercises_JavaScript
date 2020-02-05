/**
 * Promise.all
 * 
 * En este ejercicio veremos cómo nos permite Javascript 
 * ejecutar varias promesas en paralelo y ejecutar nuestro 
 * código cuando terminen todas.
 * 
 * Para ello usaremos la sentencia `Promise.all` como se indica en el ejemplo
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

const get2017 = axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv');
const get2018 = axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv');
const get2019 = axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv');

Promise.all([ get2017, get2018, get2019 ])
.then( (result) => {
  
  const counterOfBeachs2017 = getNumberOfFlagsByCouncil(result[0].data.split('\n'), 'Vigo')
  const counterOfBeachs2018 = getNumberOfFlagsByCouncil(result[1].data.split('\n'), 'Vigo')
  const counterOfBeachs2019 = getNumberOfFlagsByCouncil(result[2].data.split('\n'), 'Vigo')

  console.log('2017: ', counterOfBeachs2017)
  console.log('2018: ', counterOfBeachs2018)
  console.log('2019: ', counterOfBeachs2019)

})
.catch( err => {
  console.log('ERROR DESCARGANDO DATOS. NO SE PROCESAN');
})

console.log('Esta línea está al final del fichero.. pero no es la última en ejecutarse')