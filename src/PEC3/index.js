import { getStandings, getMatches, getScorers, getTeamDetails } from "./api";
import { TEAM_ID } from "./config";

export async function init() {
  const standings = await getStandings();
  //standings.logData();
  standings.renderData()

  //const matches = await getMatches();
  //matches.logData();

  //const scorers = await getScorers();
  //scorers.logData();

  //const teamDetails = await getTeamDetails(TEAM_ID);
  //teamDetails.logData();
}
