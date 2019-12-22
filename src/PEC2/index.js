import { getStandings, getMatches, getScorers, getTeams, getTeam } from './api';

export default async function init() {
  console.log('Saludos desde la PEC2');

  /**
   * CLASIFICACION
   */
  const clasificacion = await getStandings();
  console.log('1: clasificacion', clasificacion);

  //const cTotal = clasificacion.obtenerClasificacionTipo('TOTAL');
  //console.log('clasificacion total', cTotal);
  //const cPrimerasPosiciones = clasificacion.obtenerClasificacionPrimerasPosiciones();
  //console.log('clasificacion primeras posiciones', cPrimerasPosiciones);

  /**
   * CALENDARIO
   */
  const calendario = await getMatches();
  console.log('2: calendario', calendario);

  //const cJornada = calendario.obtenerCalendarioJornada(2);  // Obtengo el calendario de la jornada 2
  //console.log('calendario jornada 2', cJornada);

  //const cEquipo = calendario.obtenerCalendarioEquipo(77); // Obtengo el calendario del equipo con id 77 "Athletic Club"
  //console.log('calendario equipo 77', cEquipo);

  /**
   * GOLEADORES
   */
  const goleadores = await getScorers();
  console.log('3: goleadores', goleadores);

  //const maximoGoleador = goleadores.obtenerMaximoGoleador();
  //console.log('maximo goleador', maximoGoleador);

  /**
   * DETALLE EQUIPOS
   */
  const detalleEquipos = await getTeams();
  console.log('4: detalle equipos', detalleEquipos);

  //const nombreEquipos = detalleEquipos.obtenerNombreEquipos();
  //console.log('nombre equipos', nombreEquipos);

  /**
   * DATOS EQUIPO
   */
  const equipo = await getTeam(95);
  console.log('5: equipo Valencia CF', equipo);
}
