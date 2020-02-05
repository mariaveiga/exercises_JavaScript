/**
 * Un transportista hace paradas cada hora para tomarse
 * un descanso. Su vehículo es eléctrico por lo que aprovecha
 * algunas de las paradas para recargar la batería. 
 * 
 * Los kilómetros recorridos cada hora se representan en un array.
 * Si bajo ningún concepto el vehículo puede llegar a los 300km
 * sin recargar, ¿cuándo tiene que realizar las paradas?
 *
 * 
 * Ej.: [100, 50, 90, 100, 80, 80, 100]
 *     - tiene que recargar a las 3 y a las 6 horas de haber salido
 * 
 */

const MAX_KM = 300;
const sections = [100, 50, 90, 100, 80, 80, 100];
let kms = 0;

for (let i=0; i<sections.length; i++) {
    if (kms + sections[i] > MAX_KM) {
        console.log(`Tienes que repostar en la parada: ${i}`);
        kms = 0;
    } 

    kms += sections[i];
}