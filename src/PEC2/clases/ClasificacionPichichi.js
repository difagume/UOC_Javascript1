export class ClasificacionPichichi {
  constructor(goleadores) {
    this.goleadores = goleadores;
  }

  obtenerMaximoGoleador() {
    let goleador;
    let maximo = 0;
    this.goleadores.forEach(scorer => {
      if (scorer.numeroGoles > maximo) {
        maximo = scorer.numeroGoles;
        goleador = scorer;
      }
    });

    return goleador;
  }
}
