export class Clasificacion {
  constructor(nombreCompeticion, jornadaActual, clasificacion, anio) {
    this.nombreCompeticion = nombreCompeticion;
    this.jornadaActual = jornadaActual;
    this.clasificacion = clasificacion; //total, casa, fuera
    this.anio = anio;
  }

  obtenerClasificacionTipo(tipo) {
    return this.clasificacion.find(t => t.type === tipo);
  }

  obtenerClasificacionPrimerasPosiciones() {
    let clasificacionPrimerasPosicicones = [...this.clasificacion];

    clasificacionPrimerasPosicicones.forEach(clasificacion => {
      clasificacion.table.splice(1);
    });

    return clasificacionPrimerasPosicicones;
  }
}
