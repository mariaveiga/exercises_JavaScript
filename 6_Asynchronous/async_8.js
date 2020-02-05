/**
 * Promises: async/await
 * 
 * En el ejercicio anterior vimos como, gracias
 * a `Promise.all` podemos lanzar varias promesas
 * al mismo tiempo y esperar ejecutar el código
 * que nos interese cuando estén todas resueltas.
 * 
 * En este vamos a ver cómo hacer para ejecutarlas en serie,
 * es decir, una detrás de otra, pudiendo ejecutar código 
 * en medio. En realidad es algo que ya hicimos en `async_6`, 
 * si bien ahora introduciremos una sintaxis más compacta
 * y moderna: `async/await`
 * 
 * En lugar de lanzar la promesa con `then` y pasarle un `callback`
 * a continuación, `await` permite asignar el valor devuelto
 * por una promesa directamente a una variable:
 * 
 *   const datos = await axios.get(... url ...)
 * 
 * Sin embargo, Javascript no permite usar `await` en cualquier
 * parte del código. Debe hacerse únicamente en contextos
 * asíncronos. Un contexto es asíncrono cuando está precedido
 * de la palabra `async`, por ejemplo en una función:
 * 
 *    getYearlyBeachesData = async (council) => { 
 *        ...
 *        const datos = await axios.get ...
 *        ...
 *    }
 * 
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


getYearlyBeachesData = async (council) => {
  const datos2017 = await axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv');
  const counterOfBeachs2017 = getNumberOfFlagsByCouncil(datos2017.data.split('\n'), council);

  const datos2018 = await axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv')
  const counterOfBeachs2018 = getNumberOfFlagsByCouncil(datos2018.data.split('\n'), council);

  const datos2019 = await axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv')
  const counterOfBeachs2019 = getNumberOfFlagsByCouncil(datos2019.data.split('\n'), council);

  return [counterOfBeachs2017, counterOfBeachs2018, counterOfBeachs2019];
}

getYearlyBeachesData('Vigo')
.then((datos) => {
  console.log('Los datos son: ', datos);
})


console.log('Esta línea está al final del fichero.. pero no es la última en ejecutarse')