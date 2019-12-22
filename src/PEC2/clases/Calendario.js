export class Calendario {
  constructor(anio, liga, numeroPartidos, partidos) {
    this.anio = anio;
    this.liga = liga;
    this.numeroPartidos = numeroPartidos;
    this.partidos = partidos;
  }

  obtenerCalendarioJornada(numeroJornada) {
    return this.partidos.filter(partido => partido.jornadaPartido === numeroJornada);
  }

  obtenerCalendarioEquipo(numeroEqipo) {
    return this.partidos.filter(partido => {
      if (partido.equipoLocal.id === numeroEqipo || partido.equipoVisitante.id === numeroEqipo) {
        return partido;
      }
    });
  }
}
