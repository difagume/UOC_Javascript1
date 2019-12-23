const COMPETITION_ID = 2014;

const API = "https://API.football-data.org/v2";

export const TEAM_ID = 81;

export const API_TOKEN = "b2bdf08f107541ec91877a6212931ddb";

export const ENDPOINTS = {
  COMPETITION: `${API}/competitions/${COMPETITION_ID}/teams`,
  STANDINGS: `${API}/competitions/${COMPETITION_ID}/standings`,
  MATCHES: `${API}/competitions/${COMPETITION_ID}/matches`,
  SCORERS: `${API}/competitions/${COMPETITION_ID}/scorers`,
  TEAM_DETAILS: `${API}/teams`
};
