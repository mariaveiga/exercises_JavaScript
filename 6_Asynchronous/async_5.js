/**
 * ¿Y si quisiéramos hacer varias descargas?
 * 
 * En este ejercicio se plantea una segunda manera de realizar
 * las descargas: esperar a iniciar una nueva mientras no acabe 
 * la anterior.
 * 
 * Observa en el código cómo se encadenan.
 * 
 * Esta implementación tiene la siguientes características:
 *    - asegura que la ejecución se realiza en el orden deseado
 *    - tarda más que la anterior (comprobadlo). En el ejercicio
 *      anterior había tres descargas de manera simultáneas, mientras
 *      que aquí esperamos a que una termine para realiza la otra
 *    - el código es `sucio`: estamos anidando mucho código, haciendo
 *      que los niveles de indentación crezcan. Esto complica el
 *      manteniento y favorece la aparición de bugs (es fácil equicarse
 *      e introducir una nueva línea donde no se pretendía hacerlo)
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

axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0380/praias-galegas-con-bandeira-azul-2017/001/descarga-directa-ficheiro.csv', )
  .then(response => {
    const counterOfBeachs = getNumberOfFlagsByCouncil(response.data.split('\n'), 'Vigo')

    console.log(`[2017] ${council}: ${counterOfBeachs}`);


    axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0392/praias-galegas-con-bandeira-azul-2018/001/descarga-directa-ficheiro.csv')
      .then(response => {
        const counterOfBeachs = getNumberOfFlagsByCouncil(response.data.split('\n'), 'Vigo')

        console.log(`[2018] ${council}: ${counterOfBeachs}`);

        axios.get('https://abertos.xunta.gal/catalogo/cultura-ocio-deporte/-/dataset/0401/praias-galegas-con-bandeira-azul-2019/001/descarga-directa-ficheiro.csv')
          .then(response => {
            const counterOfBeachs = getNumberOfFlagsByCouncil(response.data.split('\n'), 'Vigo')

            console.log(`[2019] ${council}: ${counterOfBeachs}`);
          });
      });

  });







console.log('Esta línea está al final del fichero.. pero no es la última en ejecutarse')