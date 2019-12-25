import { getTeamDetails, getMatches, getStandings, getScorers } from '../api';

export function setLoading(display) {
  const loader = document.querySelector('.loader');
  loader.style.display = display;
}

export async function handleGetTeamDetail(teamId) {
  setLoading('block');
  const teamDetails = await getTeamDetails(teamId);
  const teamDiv = document.getElementById('team');

  if (teamDiv === null) {
    teamDetails.renderData();
  } else {
    teamDetails.refreshData();
  }

  setLoading('none');
}

export async function handleTabs(btnId) {
  const btn = document.getElementById(btnId);
  const btnActive = document.querySelector('.is-active');

  btn.setAttribute('class', 'is-active');
  btnActive.removeAttribute('class');

  setLoading('block');

  if (btnId === 'btnMatches') {
    const matches = await getMatches();
    matches.renderData();
  } else {
    const standings = await getStandings();
    standings.renderData();

    const scorers = await getScorers();
    scorers.renderData();
  }

  setLoading('none');
}
