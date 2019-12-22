export class DetalleEquipos {
  constructor(anio, liga, numeroEquipos, temporada, equipos) {
    this.anio = anio;
    this.liga = liga;
    this.numeroEquipos = numeroEquipos;
    this.temporada = temporada;
    this.equipos = equipos;
  }

  obtenerNombreEquipos() {
    let equipos = [];
    this.equipos.forEach(equipo => {
      equipos.push(equipo.nombre);
    });

    return equipos;
  }
}
