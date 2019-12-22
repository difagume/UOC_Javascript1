import { Clasificacion } from './clases/Clasificacion';
import { Partido } from './clases/Partido';
import { Goleador } from './clases/Goleador';
import { Calendario } from './clases/Calendario';
import { Equipo } from './clases/Equipo';
import { DetalleEquipos } from './clases/DetalleEquipos';
import { ClasificacionPichichi } from './clases/ClasificacionPichichi';

// Clasificacion equipos
export function prepareStandings(data) {
  //console.log('clasificacion-->', data);
  const standings = new Clasificacion(
    data.competition.name,
    data.season.currentMatchday,
    data.standings,
    data.competition.id
  );
  return standings;
}

// Calendario
export function prepareMatches(data) {
  //console.log('matches', data);
  let partidos = [];

  // recorro matches para crear calendario de Partidos
  data.matches.forEach(calendario => {
    //console.log(calendario);
    const partido = new Partido(
      calendario.awayTeam,
      calendario.homeTeam,
      calendario.matchday,
      calendario.score.fullTime
    );

    partidos.push(partido);
  });

  const calendario = new Calendario(
    data.competition.id,
    data.competition.name,
    data.count,
    partidos
  );
  return calendario;
}

// Goleadores
export function prepareScorers(data) {
  //console.log('pichichi', data);
  let goleadores = [];
  data.scorers.forEach(score => {
    const goleador = new Goleador(score.numberOfGoals, score.player, score.team);

    goleadores.push(goleador);
  });

  const pichichis = new ClasificacionPichichi(goleadores);
  return pichichis;
}

// Detalle equipos
export function prepareTeams(data) {
  //console.log('detalle equipos', data);
  let equipos = [];

  data.teams.forEach(team => {
    const equipo = new Equipo(
      team.address,
      team.clubColors,
      team.founded,
      team.name,
      team.shortName
    );

    equipos.push(equipo);
  });

  const detalleEquipos = new DetalleEquipos(
    data.competition.id,
    data.competition.name,
    data.count,
    data.season,
    equipos
  );
  return detalleEquipos;
}

// Equipo
export function prepareTeam(data) {
  const equipo = new Equipo(data.address, data.clubColors, data.founded, data.name, data.shortName);
  return equipo;
}
