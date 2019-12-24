import { getStandings, getMatches, getScorers, getTeamDetails } from "./api";
import { TEAM_ID } from "./config";
import { setLoading } from './utils/events';

export async function init() {
  /* window.onload = function () {
    document.querySelector('.loader').style.display = "none"
  } */

  setLoading('block')

  const nav = document.getElementById('navigation')

  const btnStandings = document.createElement('button')
  btnStandings.className = 'is-active'
  btnStandings.textContent = 'Standings'

  const btnMatches = document.createElement('button')
  btnMatches.textContent = 'Matches'

  nav.appendChild(btnStandings)
  nav.appendChild(btnMatches)


  const standings = await getStandings();
  //standings.logData();
  standings.renderData()

  //const matches = await getMatches();
  //matches.logData();

  const scorers = await getScorers();
  //scorers.logData();
  scorers.renderData()

  //const teamDetails = await getTeamDetails(TEAM_ID);
  //teamDetails.logData();
  //teamDetails.renderData();

  setLoading('none')
}
