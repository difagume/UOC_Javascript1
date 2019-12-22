import {
  prepareStandings,
  prepareMatches,
  prepareScorers,
  prepareTeams,
  prepareTeam
} from './utils';
import { API_TOKEN, API_URL } from './config';

const headers = new Headers();
headers.append('X-Auth-Token', API_TOKEN);

// obtener datos desde la API
async function getEndpoint(url) {
  try {
    const response = await fetch(url, { method: "GET", headers });
    const apiData = await response.json();

    return apiData;
  } catch (err) {
    console.log("fetch failed", err);
  }
}

// Obtener clasificación de equipos
export async function getStandings() {
  const data = await getEndpoint(API_URL.STANDINGS_URL)
  // preparar datos obtenidos
  const clasificacion = prepareStandings(data);
  return clasificacion;
}

// Obtener calendario
export async function getMatches() {
  const data = await getEndpoint(API_URL.MATCHES_URL)
  // preparar datos obtenidos
  const calendarios = prepareMatches(data);
  return calendarios;
}

// Obtener clasificación goleadores
export async function getScorers() {
  const data = await getEndpoint(API_URL.SCORERS_URL)
  // preparar datos obtenidos
  const goleadores = prepareScorers(data);
  return goleadores;
}

// Obtener detalles equipos
export async function getTeams() {
  const data = await getEndpoint(API_URL.TEAMS_URL)
  const detalleEquipos = prepareTeams(data);
  return detalleEquipos;
}

// Obtener detalle equipo
export async function getTeam(idEquipo) {
  const data = await getEndpoint(`${API_URL.TEAM_URL}/${idEquipo}`)
  // preparar datos obtenidos
  return prepareTeam(data);
}
