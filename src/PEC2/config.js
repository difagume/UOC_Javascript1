const URL = 'http://api.football-data.org/v2';
const ID_LIGA = '2014';

export const API_TOKEN = 'b2bdf08f107541ec91877a6212931ddb';

export const API_URL = {
  STANDINGS_URL: `${URL}/competitions/${ID_LIGA}/standings`,
  MATCHES_URL: `${URL}/competitions/${ID_LIGA}/matches`,
  SCORERS_URL: `${URL}/competitions/${ID_LIGA}/scorers`,
  TEAMS_URL: `${URL}/competitions/${ID_LIGA}/teams`,
  TEAM_URL: `${URL}/teams`
};
