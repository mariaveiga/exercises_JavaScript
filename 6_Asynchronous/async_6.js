/**
 * ¿Y si quisiéramos hacer varias descargas?
 * 
 * Esta implementación soluciona los problemas de la anterior.
 * 
 * Nota cómo se encadenan las promesas: `axios.get` devuelve
 * una `Promesa` y a su vez, el código que ejecutamos en el 
 * `then` devuelve otra `Promesa`. De esta forma se pueden
 * encadenar. Observa cómo el nivel de indentación del código
 * es el mismo en todos los casos.
 * 
 * ¿Qué pasa si alguna de las descarga no funciona? Las `Promesas`
 * incluyen un mecanismo para tratar los errores: la clásula `catch`.
 * Si hay algún error en alguna `Promesa` se para la cadena de 
 * ejecución y se salta a ejecutar el código del `catch`
 * 
 * Prueba a introducir algún error en las URL (por ejemplo sustituír 
 * el .gal por .noexiste). Hazlo primero en la de 2017 y luego en las demás.
 * Observa cómo para las promesas ya ejecutadas, se devuelve el 
 * resultado correctamente, mientras que las posteriores no se ejecutan.
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

const url2017 = 'https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv'

axios.get(url2017)
  .then( response => {
    const counterOfBeachs = getNumberOfFlagsByCouncil(response.data.split('\n'), council)
    console.log('2017: ',counterOfBeachs)

    return axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv')
  })
  .then( response => {
    const counterOfBeachs = getNumberOfFlagsByCouncil(response.data.split('\n'), council)
    console.log('2018: ',counterOfBeachs)

    return axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv')
  })
  .then( response => {
    const counterOfBeachs = getNumberOfFlagsByCouncil(response.data.split('\n'), council)
    console.log('2019: ',counterOfBeachs)
  })
  .catch( (err) => {
    console.log('Error: ', err.errno)
  })




console.log('Esta línea está al final del fichero.. pero no es la última en ejecutarse')