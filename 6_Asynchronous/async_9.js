/**
 * Promises: ejercicio
 * 
 * Obtén el número de banderas azules para un ayuntamiento
 * para los años y URLs disponibles en el fichero links.csv
 * 
 */

const axios = require('axios');
const fs = require('fs');
const fsPromises = fs.promises;

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

/*

// IMPLEMENTACIÓN 1: for
let years = [];

fsPromises.readFile('../resources/links.csv')
.then((data) => {
  const urls = data.toString().split('\n')

  let urlPromises = [];

  for (let url of urls) {
    if (url.trim().length === 0) {
      continue;
    }
    const fields = url.split(',');
    urlPromises.push(axios.get(fields[1]));
    years.push(fields[0]);
  }
  
  return Promise.all(urlPromises);
})
.then( (result) => {
  let numberOfBeaches = {};

  for (let index in result) {
    numberOfBeaches[years[index]] = getNumberOfFlagsByCouncil(result[index].data.split('\n'), 'Vigo')
  }
 
  console.log(numberOfBeaches);
})
.catch((err) => {
  console.log(err)
})

*/

// IMPLEMENTACIÓN 2: filter/map
years = []
fsPromises.readFile('../resources/links.csv')
.then((data) => {
  const urlInfo = data.toString()
    .split('\n')
    .filter(line => line.trim().length !== 0)

  const urlPromises = urlInfo
    .map( url => url.split(',')[1])
    .map( url => axios.get(url))

  years = urlInfo
    .map( url => url.split(',')[0])

  return Promise.all(urlPromises)

})
.then(result => {
  let numberOfBeaches = {};

  for (let index in result) {
    numberOfBeaches[years[index]] = getNumberOfFlagsByCouncil(result[index].data.split('\n'), 'Vigo')
  }
 
  console.log(numberOfBeaches);
}) 

console.log('Esta línea está al final del fichero.. pero no es la última en ejecutarse')